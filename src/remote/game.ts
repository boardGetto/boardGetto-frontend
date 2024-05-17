// import { COLLECTIONS } from '@/constants';
// // import { getGames } from '@/remote/game';
// import {
//   QuerySnapshot,
//   collection,
//   getDocs,
//   limit,
//   query,
//   startAfter,
// } from 'firebase/firestore';
// import { store } from './firebase';
// import { Game } from '@/models/game';

// export async function getGames(pageParams?: QuerySnapshot<Game>) {
//   const gamesQuery =
//     pageParams == null
//       ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
//       : query(
//           collection(store, COLLECTIONS.HOTEL),
//           startAfter(pageParams),
//           limit(10)
//         );

//   const gamesSnapshot = await getDocs(gamesQuery);

//   const items = gamesSnapshot.docs.map(
//     (doc) =>
//       ({
//         id: doc.id,
//         ...doc.data(),
//       }) as Game
//   );

//   const lastVisible = gamesSnapshot.docs[gamesSnapshot.docs.length - 1];

//   return {
//     items,
//     lastVisible,
//   };
// }
