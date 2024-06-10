import BottomArrow from '../../../public/icons/toolTip/bottom-arrow.svg';
import TopArrow from '../../../public/icons/toolTip/top-arrow.svg';
import BSIcon from './BSIcon';

const defaultTooltipCss =
  'absolute flex justify-center items-center whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-caption-subBlue02 rounded';

let positionCss = '';

const defaultPointCss = 'absolute hidden border-[10px]';

let pointCss = '';

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
  if (position === 'top') {
    positionCss = 'left-28 -translate-x-1/2 bottom-[calc(100%+11px)]';
  } else if (position === 'bottom') {
    positionCss = 'left-1/5 -translate-x-1/2 top-[calc(100%+11px)]';
  }

  if (position === 'top') {
    pointCss = 'left-6 bottom-full';
  } else if (position === 'bottom') {
    pointCss = 'right-6';
  }

  return (
    <div>
      <div className="relative group">
        <div className="text-secondary-main text-body-03 ">{children}</div>
        <div>
          <p className={`${defaultTooltipCss} ${positionCss}`}>{content}</p>
          {position === 'top' ? (
            <span className={`${defaultPointCss} ${pointCss}`}>
              <BSIcon alt="game-status-icon" iconUrl={BottomArrow} />
            </span>
          ) : (
            <span className={`${defaultPointCss} ${pointCss}`}>
              <BSIcon alt="game-status-icon" iconUrl={TopArrow} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
