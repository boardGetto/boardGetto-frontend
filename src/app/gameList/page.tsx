'use client';

// import InfiniteScroll from 'react-infinite-scroll-component';
import Game from '@/components/gameList/Game';
import useGames from '@/components/gameList/hooks/useGames';

export default function Page() {
  const { data: games, hasNextPage, loadMore } = useGames();

  console.log('games', games);
  return (
    <div>
      {/* <InfiniteScroll
        dataLength={games?.length ?? 0}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold={100}
      > */}
      {/* <ul> */}
      <div>{games?.map((game) => <Game key={game.id} game={game} />)}</div>
      {/* </ul> */}
      {/* </InfiniteScroll> */}
    </div>
  );
}
