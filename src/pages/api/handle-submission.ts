import type { NextApiRequest, NextApiResponse } from "next";
import { sendSlackMessage } from "./send-slack";
import {
  sendErrorNotificationEmail,
  sendNotificationEmail,
} from "./send-email";
import { writeGoogleSheet } from "./write-gsheet";

export type FormSubmissionStatus = {
  slack: boolean;
  gsheet: boolean;
  email: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  const statuses: FormSubmissionStatus = {
    slack: false,
    gsheet: false,
    email: false,
  };

  // Send Slack message
  try {
    await sendSlackMessage(data);
    statuses.slack = true;
  } catch (err) {
    console.error("Failed to send Slack message:", err, data);
  }

  // Fill google sheet
  try {
    await writeGoogleSheet(data);
    statuses.gsheet = true;
  } catch (err) {
    console.error("Failed to write to Google Sheets:", err, data);
  }

  // Send email
  try {
    await sendNotificationEmail(data);
    statuses.email = true;
  } catch (err) {
    console.error("Failed to send email:", err, data);
  }

  if (!statuses.slack || !statuses.gsheet || !statuses.email) {
    try {
      await sendErrorNotificationEmail(statuses, data);
    } catch (err) {
      console.error(
        "Failed to send error notification email:",
        err,
        statuses,
        data
      );
    }
  }

  if (!statuses.email) {
    return res.status(500).json({ error: "Failed to send email" });
  }

  return res.status(200).json({ success: true });
}
