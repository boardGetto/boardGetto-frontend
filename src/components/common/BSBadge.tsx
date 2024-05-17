const defaultBadgeCss = 'py-1 px-2 rounded-lg text-captionRegular-12 w-fit';

let statusBadgeCss = '';

interface BSBadgeProps {
  label: string;
  status?: 'isAuth' | 'noAuth' | 'normal';
  isHashTag?: boolean;
}

export default function BSBadge({
  label = '',
  status = 'normal',
  isHashTag = false,
}: BSBadgeProps) {
  if (status === 'isAuth') {
    statusBadgeCss = 'text-caption-subBlue02  bg-caption-subBlue01';
  } else if (status === 'noAuth') {
    statusBadgeCss = 'text-caption-error02 bg-caption-error01 ';
  } else {
    statusBadgeCss = 'text-nutral-gray-03 bg-nutral-white-02';
  }
  return (
    <div className={`${defaultBadgeCss} ${statusBadgeCss}`}>
      {isHashTag ? `#${label}` : label}
    </div>
  );
}
