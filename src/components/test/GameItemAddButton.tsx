import { doc, collection, writeBatch } from 'firebase/firestore';
import { store } from '@/remote/firebase';
import { COLLECTIONS } from '@/constants';
import BSButton from '../common/BSButton';
import { HOTEL_NAMES, IMAGES, HOTEL, EVENTS, ROOMS } from '@/mock/data';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function GameItemAddButton() {
  const batch = writeBatch(store);
  const handleBtnClick = () => {
    const hotels = HOTEL_NAMES.map((hotelName, idx) => {
      return {
        name: hotelName,
        mainImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        images: IMAGES,
        price: random(130000, 200000),
        starRating: random(1, 5),
        ...HOTEL,
        ...(EVENTS[idx] != null && { events: EVENTS[idx] }),
      };
    });

    hotels.forEach((hotel) => {
      const hotelDocRef = doc(collection(store, COLLECTIONS.HOTEL));

      batch.set(hotelDocRef, hotel);

      ROOMS.forEach((room) => {
        const subDocRef = doc(collection(hotelDocRef, COLLECTIONS.ROOMS));

        batch.set(subDocRef, room);
      });
    });

    batch.commit();

    console.log('hoels', hotels);
  };
  return <BSButton onClick={handleBtnClick}>gamexxzs</BSButton>;
}
