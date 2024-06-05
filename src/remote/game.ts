import { COLLECTIONS } from '@/constants/collection';
import { store } from '@/firebase/firebase';
import { GAME } from '@/models/game';
import {
  QuerySnapshot,
  query,
  collection,
  startAfter,
  limit,
  getDocs,
} from 'firebase/firestore';

export async function getGames(pageParam?: QuerySnapshot<GAME>) {
  const gameQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.GAME), limit(15))
      : query(
          collection(store, COLLECTIONS.GAME),
          startAfter(pageParam),
          limit(15)
        );

  const gameSnapshot = await getDocs(gameQuery);
  const lastVisible = gameSnapshot.docs[gameSnapshot.docs.length - 1];

  const items = gameSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as GAME),
  }));

  return { items, lastVisible };
}
