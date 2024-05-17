import { ReactNode } from 'react';
import Image from 'next/image';

const defaultBtnCss =
  'w-full px-6  rounded-lg flex items-center justify-center gap-1';

let btnSizeCss = '';

let btnColorCss = '';

interface BSBadgeProps {
  children: ReactNode;
  size?: 'lg' | 'md' | 'sm';
  mode?: 'main' | 'soft' | 'outlineRed' | 'outlineGray' | 'text' | 'whiteText';
  isSrc?: string;
  bgColor?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BSButton({
  children,
  size = 'md',
  mode = 'soft',
  onClick,
  isSrc = '',
  bgColor = '',
}: BSBadgeProps) {
  if (size === 'lg') {
    btnSizeCss = 'py-3 max-h-[72px] text-headBold-20';
  } else if (size === 'md') {
    btnSizeCss = 'py-4 max-h-[50px] text-textBold-16';
  } else if (size === 'sm') {
    btnSizeCss = 'py-2 max-h-[34px]';
  }

  if (mode === 'main') {
    btnColorCss =
      ' border-0 bg-primary-getto500 text-nutral-white-01  focus:bg-primary-getto600 disabled:text-nutral-gray-01 disabled:text-nutral-gray-01 disabled:bg-nutral-white-02';
  } else if (mode === 'soft') {
    btnColorCss =
      ' border-0 bg-primary-getto50 text-primary-getto400 focus:bg-primary-getto100  focus:bg-primary-getto100  disabled:bg-nutral-white-01 disabled:text-nutral-gray-01';
  } else if (mode === 'outlineRed') {
    btnColorCss =
      'bg-nutral-white-01 border-0  text-primary-getto500  focus:bg-primary-getto50 outline:bg-primary-getto500 ';
  } else if (mode === 'outlineGray') {
    btnColorCss =
      'bg-nutral-white-01  border border-nutral-gray-02 text-nutral-black-01 focus:bg-nutral-white-02';
  } else if (mode === 'text') {
    btnColorCss = '';
  } else if (mode === 'whiteText') {
    btnColorCss = 'text-nutral-white-03';
  } else {
    btnColorCss =
      'bg-primary-getto500  focus:bg-nutral-white-02 disabled:bg-nutral-white-02 disabled:text-nutral-gray-01';
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${defaultBtnCss} ${btnSizeCss} ${btnColorCss}`}
      style={{ backgroundColor: bgColor }}
    >
      {isSrc && (
        <Image src={isSrc} alt="icon" width={24} height={24} priority />
      )}
      {children}
    </button>
  );
}
