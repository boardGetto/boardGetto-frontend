import Header from '@/components/Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header title="수정하기" />
      {children}
    </div>
  );
}
