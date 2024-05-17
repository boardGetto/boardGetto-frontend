import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function MypageLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
