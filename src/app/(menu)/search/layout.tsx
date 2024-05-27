'use client';

import BSHeader from '@/components/common/BSHeader';
import BSInput from '@/components/common/BSInput';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function SearchLayout({ children }: Props) {
  return (
    <div>
      <BSHeader>
        <BSInput placeholder="보드게임 검색하기" searchImg value="" />
      </BSHeader>
      {children}
    </div>
  );
}
