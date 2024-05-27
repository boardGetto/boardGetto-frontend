import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
