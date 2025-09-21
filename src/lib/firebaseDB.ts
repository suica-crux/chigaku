import { db } from './firebaseInit';
import { collection } from 'firebase/firestore';

type ReservationData = {
  timeId: number;
  name: string;
};

export async function addReservation({ timeId: number }: ReservationData) {
  const reservationRef = collection(db, 'reservations');
}
