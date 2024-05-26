'use client';

import { doc, collection, writeBatch } from 'firebase/firestore';

import { COLLECTIONS } from '@/constants/collection';
import { GAME_GATEGORY } from '@/mock/data';
import { store } from '../../firebase/firebase';

export default function GameItemAddButton() {
  const handleBtnClick = async () => {
    const batch = writeBatch(store);

    GAME_GATEGORY.forEach((game) => {
      const hotelDocRef = doc(collection(store, COLLECTIONS.GAME_GATEGORY));

      batch.set(hotelDocRef, game);
    });

    await batch.commit();

    alert('ddd');
  };
  return (
    <div>
      {/* <button type="button" onClick={handleBtnClick}>
        파베 테스트
      </button> */}
    </div>
  );
}
