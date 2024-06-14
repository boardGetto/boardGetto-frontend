'use client';

import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import useInfiniteScroll from 'react-infinite-scroll-hook';
import { GameListResponseType, fetchGame } from '../Service/gameService';
import SearchIcon from '../../public/icons/search.svg';
import homeMain from '../../public/images/main2.png';
import BSButton from './common/BSButton';
import BSCard from './common/BSCard';

export default function Main() {
  const [games, setGames] = useState<GameListResponseType>({
    count: 0,
    next: '',
    results: [],
  });

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: games.next !== '',
    onLoadMore: async () => {
      const moreGames = await fetchGame(games.next);
      setGames({
        ...moreGames,
        results: [...games.results, ...moreGames.results],
      });
      console.log('more');
    },

    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    Aos.init({ duration: 800 });

    (async () => {
      const games = await fetchGame();
      setGames(games);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-14">
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

      <div>
        {games.results.map((games, index) => (
          <div key={`${games.name}_${index}`}>
            <BSCard gameName={games.name} />
          </div>
        ))}
      </div>
      <div ref={infiniteRef}>Loading</div>
    </div>
  );
}
