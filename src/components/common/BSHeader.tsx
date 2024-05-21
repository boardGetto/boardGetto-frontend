'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import RightArrow from '../../../public/icons/right-arrow.svg';

interface BSHeaderProps {
  title?: string;
  // isSearch?: boolean;
  children?: ReactNode;
  link?: string;
  rightText?: string;
}

export default function BSHeader({
  title = '',
  // isSearch = false,
  children,
  link = '',
  rightText = '',
}: BSHeaderProps) {
  const router = useRouter();

  const handleBackBtn = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center">
        <Image
          src={RightArrow}
          alt="right-arrow"
          width={24}
          height={24}
          priority
          className="mr-4 rotate-180 cursor-pointer"
          onClick={handleBackBtn}
        />
        <p className="text-nutral-black-02 text-textBold-16">{title}</p>

        {/* 🖐️todo : 안에다 넣어 사용할 순 없을까? 그럼 searchImg, value 이 외 데이터는? */}
        {/* {isSearch && <BSInput searchImg value="" />} */}
        {children}
      </div>
      {rightText && (
        <Link
          href={link}
          className="text-textRegular-14 text-nutral-gray-03 hover:text-primary-getto400"
        >
          {rightText}
        </Link>
      )}
    </div>
  );
}
