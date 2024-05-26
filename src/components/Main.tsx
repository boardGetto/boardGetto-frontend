'use client';

import Image from 'next/image';
// import variables from '@/styles/variables.module.scss';
import Link from 'next/link';
// import homeMain from '../../public/icons/home-main.svg';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { COLLECTIONS } from '@/constants/collection';
import { store } from '@/firebase/firebase';
import { GAME_LIST } from '@/mock/card';

import SearchIcon from '../../public/icons/search.svg';
import BSTooltip from './common/BSTooltip';
import MainImg from '../../public/images/main.png';
import GameItemAddButton from './test/GameItemAddButton';
import BSButton from './common/BSButton';

export default function Main() {
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
    <div className="flex flex-col items-center mt-[130px]">
      <Image
        src={MainImg}
        width={400}
        height={400}
        alt="sample-image"
        priority
      />
      <h1 className="bodyRegular-16 mt-2.5">보드게임 중고거래 플랫폼</h1>
      {/* <h1 className={variables.title}>Sass 적용 테스트</h1> */}

      <BSTooltip position="top" content="testtest">
        tt
      </BSTooltip>
      <Link href="/home">
        <BSButton isSrc={SearchIcon} onClick={handleButtonClick}>
          어떤 게임을 해볼까요?
        </BSButton>
        <GameItemAddButton />
      </Link>
    </div>
  );
}
