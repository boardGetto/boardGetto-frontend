import Header from '@/components/Header';
import BSMenu from '@/components/common/BSMenu';
import { ReactNode } from 'react';

type Props = { children: ReactNode };
export default function SearchLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <BSMenu />
    </div>
  );
}
