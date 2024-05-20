import { ReactNode } from 'react';

const defaultBadgeCss = 'w-fit py-1 px-2 rounded-lg text-captionRegular-12';

let statusBadgeCss = '';

interface BSBadgeProps {
  children: ReactNode;
  status?: 'isAuth' | 'noAuth' | 'normal';
  isHashTag?: boolean;
}

export default function BSBadge({
  status = 'normal',
  isHashTag = false,
  children,
}: BSBadgeProps) {
  if (status === 'isAuth') {
    statusBadgeCss = 'text-caption-subBlue02  bg-caption-subBlue01';
  } else if (status === 'noAuth') {
    statusBadgeCss = 'text-caption-error02 bg-caption-error01 ';
  } else {
    statusBadgeCss = 'text-nutral-gray-03 bg-nutral-white-03';
  }
  return (
    <div className={`${defaultBadgeCss} ${statusBadgeCss}`}>
      {isHashTag ? `#${children}` : children}
    </div>
  );
}
