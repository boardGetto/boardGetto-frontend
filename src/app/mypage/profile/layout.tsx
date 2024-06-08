import BSHeader from '@/components/common/BSHeader';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <>
      <BSHeader isBack rightText="수정하기" link="/mypage/profile/edit" />
      {children}
    </>
  );
}
