'use client';

import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
// import { css } from '@emotion/react';
// import styled from '@emotion/styled';
import variables from '@/styles/variables.module.scss';
import { useRouter } from 'next/navigation';
import formatCreatedAt from '@/util/formatCreatedAt';
import {
  SaleGameListResponseType,
  fetchGames,
  fetchSaleGame,
} from '../service/gameService';
import SearchIcon from '../../public/icons/search.svg';
import homeMain from '../../public/images/main2.png';
import BSButton from './common/BSButton';
import BSCard from './common/BSCard';
// interface Game {
//   id: number;
//   thumbnailUrl: string;
//   title: string;
//   boardGameTitle: string;
//   price: number;
//   minPlayerCount: number;
//   maxPlayerCount: number;
// }

export default function Main() {
  // const [games, setGames] = useState<Game[]>([]);
  const [saleGames, setSaleGames] = useState<SaleGameListResponseType>({
    content: [],
    empty: true,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 0,
    pageable: {
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: false,
      unpaged: false,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
    },
    size: '',
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
  });
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMoreGames = async () => {
    setLoading(true);
    const result = await fetchGames(page);
    // setGames((prevGames) => [...prevGames, ...result.content]);
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

  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 800 });
    loadMoreGames();

    // test
    (async () => {
      const fetchSaleGames = await fetchSaleGame();

      setSaleGames(fetchSaleGames);
    })();
    // test
  }, []);

  return (
    <div className={`${variables.flexCetnerCol} mt-20`}>
      <div className={`${variables.flexCenterCol} gap-4`}>
        <Image
          src={homeMain}
          width={130}
          height={130}
          alt="sample-image"
          priority
        />
        <BSButton
          isSrc={SearchIcon}
          onClick={() => {
            router.push('/home');
          }}
        >
          어떤 게임을 해볼까요?
        </BSButton>
      </div>
      {saleGames.content.map((game) => (
        <BSCard
          key={game.id}
          title={game.title}
          gameName={game.boardGameTitle}
          img={game.thumbnailUrl}
          price={game.price}
          minPlayerCount={game.minPlayerCount}
          maxPlayerCount={game.maxPlayerCount}
          createdAt={formatCreatedAt(game.createdAt)}
          interestCount={game.interestCount}
        />
      ))}
      <div ref={infiniteRef}>{loading && 'Loading...'}</div>
    </div>
  );
}

// const Container = styled.div`
//   background-color: pink;
// `;
