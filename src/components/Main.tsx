'use client';

import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { fetchGames } from '../Service/gameService';
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

  useEffect(() => {
    Aos.init({ duration: 800 });

    const loadGames = async () => {
      const result = await fetchGames();
      setGames(result.content); // response의 content 배열을 state에 저장
    };

    loadGames();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-[140px]">
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
        <div key={game.id}>
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
    </div>
  );
}
