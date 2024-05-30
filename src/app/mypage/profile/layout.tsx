import BSHeader from '@/components/common/BSHeader';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <div>
      <BSHeader title="수정하기" />
      {children}
    </div>
  );
}
