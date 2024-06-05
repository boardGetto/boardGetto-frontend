'use client';

import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function SearchLayout({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  );
}
