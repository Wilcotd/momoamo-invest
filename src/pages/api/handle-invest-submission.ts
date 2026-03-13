import type { NextApiRequest, NextApiResponse } from "next";
import { isProdEnv } from "@/utils/env";
import { WebClient } from "@slack/web-api";
import { google } from "googleapis";

export type InvestFormData = {
  email: string;
  capacity?: string;
  source: "hero" | "waitlist";
};

const testChannelId = "C09NA93UQMB"; // test-bot
const prodChannelId = "C09NE7EAHTQ"; // website-requests

// Invest leads go to a SEPARATE spreadsheet from reservations.
// Set INVEST_SPREADSHEET_ID env var on Vercel. Falls back to reservation sheet.
const investSpreadsheetId =
  process.env.INVEST_SPREADSHEET_ID ??
  (isProdEnv
    ? "1Ylgu5bodsZ7Ge0EsZuiNa440JHYXVdcxiPx77YbXNyc"
    : "1oiFtZ4nvSoinow4U-GU2N8DcgVdc1rqMC_fO8ggHYNs");
const investRange = "Sheet1!A:Z";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, capacity, source } = req.body as InvestFormData;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const statuses = { slack: false, gsheet: false };

  // Send Slack notification
  try {
    const slack = new WebClient(process.env.SLACK_WEB_CLIENT_TOKEN);
    const channel = isProdEnv ? prodChannelId : testChannelId;

    const label =
      source === "hero"
        ? "Inscription webinar (invest page)"
        : "Waitlist investisseur";

    const fields = [
      { type: "mrkdwn", text: `*Type :* ${label}` },
      { type: "mrkdwn", text: `*Email :* ${email}` },
    ];

    if (capacity) {
      fields.push({ type: "mrkdwn", text: `*Capacité :* ${capacity}` });
    }

    await slack.chat.postMessage({
      channel,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            emoji: true,
            text: `Nouveau lead invest :rocket:`,
          },
        },
        { type: "section", fields },
        { type: "divider" },
      ],
    });
    statuses.slack = true;
  } catch (err) {
    console.error("Failed to send Slack message:", err);
  }

  // Write to Google Sheets
  try {
    const credentials = JSON.parse(process.env.GOOGLE_API_CREDENTIALS!);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: investSpreadsheetId,
      range: investRange,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            email,
            capacity ?? "",
            source,
          ],
        ],
      },
    });
    statuses.gsheet = true;
  } catch (err) {
    console.error("Failed to write to Google Sheets:", err);
  }

  if (!statuses.slack && !statuses.gsheet) {
    return res.status(500).json({ error: "All submission channels failed" });
  }

  return res.status(200).json({ success: true });
}
