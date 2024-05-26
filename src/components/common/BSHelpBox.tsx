import { useState } from 'react';
import BottomArrow from '../../../public/icons/toolTip/bottom-arrow.svg';
import TopArrow from '../../../public/icons/toolTip/top-arrow.svg';

const defaultTooltipCss =
  'absolute flex justify-center items-center inline-block whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-caption-subBlue02 rounded';
const defaultPointCss =
  'absolute hidden group-hover:inline-block border-[10px]';
const positions = {
  top: {
    tooltip: 'left-28 -translate-x-1/2 bottom-[calc(100%+11px)]',
    point:
      'left-3 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-secondary-main',
  },
  bottom: {
    tooltip: 'left-1/5 -translate-x-1/2 top-[calc(100%+11px)]',
    point: 'right-5 border-t-0 border-b-secondary-main',
  },
};

interface BSHelpBoxProps {
  position: 'bottom' | 'top';
  content: string;
  children?: React.ReactNode;
}

export default function BSHelpBox({
  position = 'top',
  content = '',
  children,
}: BSHelpBoxProps) {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  const { tooltip, point } = positions[position];

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
            <p className={`${defaultTooltipCss} ${tooltip}`}>{content}</p>
            <span className={`${defaultPointCss} ${point}`}>
              {position === 'top' ? (
                <TopArrow width={14} height={14} />
              ) : (
                <BottomArrow width={14} height={14} />
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
