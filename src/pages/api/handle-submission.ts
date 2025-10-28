import type { NextApiRequest, NextApiResponse } from "next";
import { sendSlackMessage } from "./send-slack";
import { sendEmail } from "./send-email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  // Send email
  try {
    await sendEmail(data);
  } catch (err) {
    console.error("Failed to send email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }

  // Send Slack message
  try {
    await sendSlackMessage(data);
  } catch (err) {
    console.error("Failed to send Slack message:", err);
    return res.status(500).json({ error: "Failed to send Slack message" });
  }

  res.status(200).json({ success: true });
}
