'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import SearchIcon from '../../../public/icons/search.svg';
import PlusIcon from '../../../public/icons/plus.svg';
import UserIcon from '../../../public/icons/user.svg';

export default function BSMenu() {
  const defaultMenuCss =
    'flex flex-col items-center justify-center transition duration-150 cursor-pointer hover:opacity-60';
  const segment = useSelectedLayoutSegment();

  const menuList = [
    {
      title: '검색하기',
      src: SearchIcon,
      path: '/search',
      segment: 'gameSearch',
    },
    {
      title: '게임판매',
      src: PlusIcon,
      path: '/gameSale',
      segment: 'gameSale',
    },
    // {
    //   title: '마이홈',
    //   src: UserIcon,
    //   path: '/mypage',
    //   segment: 'mypage',
    // },
    {
      title: '마이홈',
      src: UserIcon,
      path: '/mainLogin',
      segment: 'mainLogin',
    },
  ];

  return (
    <ul className="flex justify-center gap-[84px] shadow-2xl rounded-2xl py-[14px] fixed mx-2 mb-11 px-8 z-30 bottom-0 bg-nutral-white-01">
      {menuList.map((item) => (
        <li
          key={item.title}
          className={`${defaultMenuCss} ${segment === item.segment ? 'text-primary-getto350' : ''}`}
        >
          <Link
            href={item.path}
            key={item.path}
            className="flex flex-col items-center justify-center"
          >
            <Image src={item.src} alt="menu" priority width={24} height={24} />
            <span className="mt-2 text-nutral-gray-02 text-bodyRegular-14">
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
