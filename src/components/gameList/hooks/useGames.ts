// import { useInfiniteQuery } from 'react-query';
// import { getGames } from '@/remote/game';
// import { useCallback } from 'react';
// import { QueryClientProvider, useQuery, useInfiniteQuery } from 'react-query';

// export default function useGames() {
// const {
//   data,
//   hasNextPage = false,
//   fetchNextPage,
//   isFetching,
// } = useInfiniteQuery(['games'], ({ pageParam }) => getGames(pageParam), {
//   getNextPageParam: (snapshot) => {
//     return snapshot.lastVisible;
//   },
// });
// const loadMore = useCallback(() => {
//   if (hasNextPage === false || isFetching) {
//     return;
//   }
//   fetchNextPage();
// }, [fetchNextPage, hasNextPage, isFetching]);
// const games = data?.pages.map(({ items }) => items).flat();
// return { data: games, loadMore, isFetching, hasNextPage };
// }
