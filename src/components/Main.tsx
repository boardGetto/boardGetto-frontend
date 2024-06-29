'use client';

import { useEffect, useState } from 'react';
import variables from '@/styles/variables.module.scss';
import { useRouter } from 'next/navigation';
import formatCreatedAt from '@/util/formatCreatedAt';
import Image from 'next/image';
import {
  SaleGameListResponseType,
  fetchSaleGame,
} from '../service/gameService'; // fetchSaleGame import 추가

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
  const [loading, setLoading] = useState(false);

  const loadSaleGames = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const result: SaleGameListResponseType = await fetchSaleGame(0); // 첫 페이지 호출
      setSaleGames({
        ...result,
      });
    } catch (error) {
      console.error('Failed to fetch sale games:', error);
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();

  useEffect(() => {
    loadSaleGames();
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
      {loading && <div>Loading...</div>}
    </div>
  );
}
