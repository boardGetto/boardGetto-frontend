import React, { ReactNode } from 'react';

interface BSTextProps {
  children: ReactNode;
  isHeadLine?: boolean;
  color?: BSTextColor;
  size?: BSTextSize;
  className?: string;
}

type BSTextSize =
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

type BSTextColor =
  | 'getto50'
  | 'getto100'
  | 'getto200'
  | 'getto250'
  | 'getto300'
  | 'getto350'
  | 'getto400'
  | 'getto500'
  | 'getto600'
  | 'getto700'
  | 'getto800'
  | 'white01'
  | 'white02'
  | 'white03'
  | 'gray01'
  | 'gray02'
  | 'gray03'
  | 'black01'
  | 'black02'
  | 'black03'
  | 'error01'
  | 'error02'
  | 'subBlue01'
  | 'subBlue02';

const BSTextStyleSize: { [key in BSTextSize]: React.CSSProperties } = {
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

const BSTextStyleColor: { [key in BSTextColor]: React.CSSProperties } = {
 getto50: { color: '#FFF3F3' },
 getto100:{ color: '#FFD4D4'},
 getto200:{ color: '#FAABAB'},
 getto250:{ color: '#FF7C7C'},
 getto300:{ color: '#F98686'},
 getto350:{ color: '#FF4C4C'},
 getto400:{ color: '#F56060'},
 getto500:{ color: '#FB4846'},
 getto600:{ color: '#D83F3E'},
 getto700:{ color: '#B83130'},
 getto800:{ color: '#961D1C'},
 white01: {color: '#FFFFFF'},
 white02: {color: '#FAF8F8'},
 white03: {color: '#E8E8E8'},
 gray01: {color: '#C4C4C4'},
 gray02: {color: '#878585'},
 gray03: {color: '#645F5F'},
 black01: {color: '#302C2C'},
 black02: {color: '#1B1717'},
 black03: {color: '#383838'},
 error01: {color: '#FFF7EF'},
 error02: {color: '#F0790B'},
 subBlue01: {color: '#F1F3FF'},
 subBlue02: {color: '#5166D3'}
};

export default function BSText({
  children,
  color = 'black01',
  size = 'TextRegular16',
  isHeadLine = false,
  className = '',
}: BSTextProps) {
  const style = {
    ...BSTextStyleSize[size],
    ...BSTextStyleColor[color],
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
