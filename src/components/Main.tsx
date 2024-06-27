'use client';

import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useCallback } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import variables from '@/styles/variables.module.scss';
import { useRouter } from 'next/navigation';
import formatCreatedAt from '@/util/formatCreatedAt';
import {
  SaleGameListResponseType,
  fetchSaleGame,
} from '../service/gameService';
import SearchIcon from '../../public/icons/search.svg';
import homeMain from '../../public/images/main2.png';
import BSButton from './common/BSButton';
import BSCard from './common/BSCard';

export default function Main() {
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
      pageSize: 10, // 페이지 사이즈를 명시적으로 설정
      paged: true,
      unpaged: false,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
    },
    size: '10',
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
  });
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMoreGames = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const result: SaleGameListResponseType = await fetchSaleGame(page);
      setSaleGames((prevGames) => ({
        ...prevGames,
        content: [...prevGames.content, ...result.content],
        empty: result.empty,
        first: result.first,
        last: result.last,
        number: result.number,
        numberOfElements: result.numberOfElements,
        pageable: result.pageable,
        size: result.size,
        sort: result.sort,
      }));
      setHasNextPage(!result.last);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('games', error);
    } finally {
      setLoading(false);
    }
  }, [loading, page]);

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
  }, [loadMoreGames]);

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
