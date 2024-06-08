'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '../../../public/icons/home.svg';
import BSIcon from './BSIcon';
import BackBtn from '../../../public/icons/back-btn.svg';
import CloseIcon from '../../../public/icons/close-black.svg'; // to do 아이콘 색상 커스텀

interface BSHeaderProps {
  title?: string;
  // isSearch?: boolean;
  children?: ReactNode;
  link?: string;
  rightText?: string;
  isHome?: boolean;
  isBack?: boolean;
  isClose?: boolean;
}

export default function BSHeader({
  title = '',
  // isSearch = false,
  children,
  link = '',
  rightText = '',
  isHome = false,
  isBack = false,
  isClose = false,
}: BSHeaderProps) {
  const router = useRouter();

  const handleBackBtn = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center">
        {isBack && (
          <Image
            src={BackBtn}
            alt="right-arrow"
            width={24}
            height={24}
            priority
            className="mr-4 cursor-pointer"
            onClick={handleBackBtn}
          />
        )}
        {/* <BSIcon iconUrl={BackBtn} alt="header-icon" onClick={handleBackBtn} /> */}
        <p className="text-nutral-black-02 text-textBold-16">{title}</p>

        {/* 🖐️todo : 안에다 넣어 사용할 순 없을까? 그럼 searchImg, value 이 외 데이터는? */}
        {/* {isSearch && <BSInput searchImg value="" />} */}
        {children}
      </div>
      {rightText && (
        <Link
          href={link}
          className="duration-200 text-textRegular-14 text-nutral-gray-03 hover:text-primary-getto400"
        >
          {rightText}
        </Link>
      )}
      {isHome && (
        <Link href="/">
          <BSIcon iconUrl={HomeIcon} alt="going home icon" />
        </Link>
      )}
      {isClose && (
        <BSIcon
          onClick={handleBackBtn}
          iconUrl={CloseIcon}
          alt="close button icon"
        />
      )}
    </div>
  );
}
