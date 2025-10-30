import { ReservationFormData } from "./types";
import { google } from "googleapis";
import { isProdEnv } from "@/utils/env";

const spreadsheetId = isProdEnv
  ? "1Ylgu5bodsZ7Ge0EsZuiNa440JHYXVdcxiPx77YbXNyc"
  : "1oiFtZ4nvSoinow4U-GU2N8DcgVdc1rqMC_fO8ggHYNs";
const range = "Sheet1!A:Z";

const getGoogleSheetsClient = () => {
  const credentials = JSON.parse(process.env.GOOGLE_API_CREDENTIALS!);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
};

export const writeGoogleSheet = async ({
  prenom,
  nom,
  email,
  phone,
  entreprise,
  participants,
  message,
  arrivalDate,
  departureDate,
  isFlexibleDates,
}: ReservationFormData) => {
  const sheets = getGoogleSheetsClient();

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          entreprise,
          nom,
          prenom,
          email,
          phone,
          participants,
          isFlexibleDates ? "Oui" : "Non",
          arrivalDate ?? "",
          departureDate ?? "",
          message,
        ],
      ],
    },
  });

  if (response.status !== 200) {
    console.error("Error writing to Google Sheets:", response.statusText);
    throw new Error(`Google Sheets API error: ${response.statusText}`);
  }

  return response.data;
};
