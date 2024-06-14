'use client';

import BSHeader from '@/components/common/BSHeader';
import { ReactNode, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: ReactNode;
}

export default function MyActiveLayout({ children }: LayoutProps) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div data-aos="fade-up">
      <BSHeader title="게임활동 관리" isClose />
      {children}
    </div>
  );
}
