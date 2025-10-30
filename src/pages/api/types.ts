export type ReservationFormData = {
  prenom: string;
  nom: string;
  email: string;
  phone: string;
  entreprise: string;
  participants: string;
  message: string;
  arrivalDate?: string;
  departureDate?: string;
  isFlexibleDates?: boolean;
};
