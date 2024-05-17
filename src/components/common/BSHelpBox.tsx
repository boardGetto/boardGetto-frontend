'use client';

import { useState } from 'react';
// import { DeleteFillIcon } from '../../../public/assets/icons/system';

// import {
//   TooltipBottomArrowIcon,
//   TooltipTopArrowIcon,
// } from '../../../public/assets/icons/arrow';

// const defaultTooltipCss =
//   'absolute hidden group-hover:inline-block  whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-secondary-main rounded';

const defaultTooltipCss =
  'absolute flex justify-center items-center inline-block whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-secondary-main rounded';

let positionCss = '';

// const defaultPointCss =
//   'absolute hidden group-hover:inline-block border-[10px]';

// const defaultPointCss = 'absolute inline-block';
// let pointCss = '';

interface TooltipProps {
  position: 'top' | 'bottom';
  coreText?: string;
  content: string;
  children?: React.ReactNode;
}

export default function WhTooltip({
  position = 'top',
  coreText = '',
  content = '',
  children,
}: TooltipProps) {
  if (position === 'top') {
    positionCss = 'left-28 -translate-x-1/2 bottom-[calc(100%+11px)]';
  } else if (position === 'bottom') {
    positionCss = 'left-1/5 -translate-x-1/2 top-[calc(100%+11px)]';
  }

  // if (position === 'top') {
  //   pointCss =
  //     'left-3 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-secondary-main';
  // } else if (position === 'bottom') {
  //   pointCss = 'right-5 border-t-0 border-b-secondary-main';
  // }

  if (position === 'top') {
    pointCss = 'left-6 bottom-full';
  } else if (position === 'bottom') {
    pointCss = 'right-6';
  }

  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div>
      <div className="relative group">
        <button
          type="button"
          onClick={handleClick}
          className="mx-2 cursor-pointer text-secondary-main"
        >
          {children}
        </button>
        {isShow && (
          <div>
            <p className={`${defaultTooltipCss} ${positionCss}`}>
              <span className="text-primary-main">{coreText}</span>
              {content}
            </p>
            {/* {position === 'top' ? (
              <span className={`${defaultPointCss} ${pointCss}`}>
                <TooltipBottomArrowIcon width={14} height={14} />
              </span>
            ) : (
              <span className={`${defaultPointCss} ${pointCss}`}>
                <TooltipTopArrowIcon width={14} height={14} />
              </span>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}
