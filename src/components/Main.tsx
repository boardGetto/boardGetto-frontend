'use client';

import Image from 'next/image';
// import variables from '@/styles/variables.module.scss';
import Link from 'next/link';
// import homeMain from '../../public/icons/home-main.svg';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { COLLECTIONS } from '@/constants/collection';
import { store } from '@/firebase/firebase';
import { GAME_LIST } from '@/mock/card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import SearchIcon from '../../public/icons/search.svg';
// import homeMain from '../../public/images/main.png';
import homeMain from '../../public/images/main2.png';

import GameItemAddButton from './test/GameItemAddButton';
import BSButton from './common/BSButton';

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });

  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    GAME_LIST.forEach((game) => {
      const docRef = doc(collection(store, COLLECTIONS.GAME));

      batch.set(docRef, game);
    });

    await batch.commit();

    alert('testest');
  };
  return (
    <div className="flex flex-col items-center mt-[130px] gap-4">
      <Image
        src={homeMain}
        width={180}
        height={180}
        alt="sample-image"
        priority
      />
      <Link href="/home" data-aos="zoom-out">
        <BSButton isSrc={SearchIcon} onClick={handleButtonClick}>
          어떤 게임을 해볼까요?
        </BSButton>
        <GameItemAddButton />
      </Link>
    </div>
  );
}
