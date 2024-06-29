import React, { ReactNode } from 'react';

interface BSTextProps {
  children: ReactNode;
  isHeadLine?: boolean;
  color?: string;
  type?: BSTextType;
  className?: string;
}

type BSTextType =
  | 'HeadBold20'
  | 'HeadRegular20'
  | 'HeadRegular18'
  | 'HeadBold18'
  | 'TextBold16'
  | 'TextBold14'
  | 'TextRegular16'
  | 'TextRegular14'
  | 'CaptionBold12'
  | 'CaptionRegular12'
  | 'BodyRegular16'
  | 'BodyRegular15'
  | 'BodyRegular14';

const BSTextStyle: { [key in BSTextType]: React.CSSProperties } = {
  HeadBold20: { fontWeight: 'bold', fontSize: '20px', lineHeight: '24px' },
  HeadRegular20: {
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '29px',
  },
  HeadRegular18: {
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
  },
  HeadBold18: { fontWeight: 'bold', fontSize: '18px', lineHeight: '21px' },
  TextBold16: { fontWeight: 'bold', fontSize: '16px', lineHeight: '19px' },
  TextBold14: { fontWeight: 'bold', fontSize: '14px', lineHeight: '17px' },
  TextRegular16: {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
  },
  TextRegular14: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
  },
  CaptionBold12: {
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '19px',
  },
  CaptionRegular12: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '19px',
  },
  BodyRegular16: { fontWeight: 'normal', fontSize: '16px', lineHeight: '24px' },
  BodyRegular15: {
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '22px',
  },
  BodyRegular14: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
  },
};

export default function BSText({
  children,
  color = '#302C2C',
  type = 'TextRegular16',
  isHeadLine = false,
  className = '',
}: BSTextProps) {
  const textColor = className ? '' : color;
  const style = {
    ...BSTextStyle[type],
    color: textColor,
  };

  return (
    <p
      style={style}
      className={`${isHeadLine ? 'pt-6 pb-[14px]' : ''} ${className}`}
    >
      {children}
    </p>
  );
}
