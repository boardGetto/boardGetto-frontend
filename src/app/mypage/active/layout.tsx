import BSHeader from '@/components/common/BSHeader';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function MyActiveLayout({ children }: LayoutProps) {
  return (
    <div>
      <BSHeader title="나의 게임활동 관리" />
      {children}
    </div>
  );
}
