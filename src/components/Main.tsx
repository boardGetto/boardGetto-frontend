'use client';

import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { css } from '@emotion/react';
// import styled from '@emotion/styled';
import { fetchGames } from '../service/gameService';
import SearchIcon from '../../public/icons/search.svg';
import homeMain from '../../public/images/main2.png';
import BSButton from './common/BSButton';
import BSCard from './common/BSCard';

interface Game {
  id: number;
  thumbnailUrl: string;
  title: string;
  boardGameTitle: string;
  price: number;
  minPlayerCount: number;
  maxPlayerCount: number;
}

export default function Main() {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMoreGames = async () => {
    setLoading(true);
    const result = await fetchGames(page);
    setGames((prevGames) => [...prevGames, ...result.content]);
    setHasNextPage(!result.last);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMoreGames,
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    Aos.init({ duration: 800 });
    loadMoreGames();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <Image
        src={homeMain}
        width={130}
        height={130}
        alt="sample-image"
        priority
      />
      <Link href="/home" data-aos="zoom-out">
        <BSButton isSrc={SearchIcon} onClick={() => {}}>
          어떤 게임을 해볼까요?
        </BSButton>
      </Link>

      {games.map((game) => (
        <div key={`${game.id}-${game.title}`}>
          <BSCard
            title={game.title}
            gameName={game.boardGameTitle}
            img={game.thumbnailUrl}
            price={game.price}
            minPlayerCount={game.minPlayerCount}
            maxPlayerCount={game.maxPlayerCount}
          />
        </div>
      ))}
      <div ref={infiniteRef}>{loading && 'Loading...'}</div>
    </div>
  );
}

// const Container = styled.div`
//   background-color: pink;
// `;

const bold = css`
  font-weight: bold;
`;
