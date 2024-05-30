'use client';

import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import SearchIcon from '../../public/icons/search.svg';
import homeMain from '../../public/images/main2.png';

import BSButton from './common/BSButton';

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });

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
        <BSButton isSrc={SearchIcon} onClick={() => {}}>
          어떤 게임을 해볼까요?
        </BSButton>
      </Link>
    </div>
  );
}
