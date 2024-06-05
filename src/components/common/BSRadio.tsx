const wrapCss = '';

const defaultRadioCss =
  'appearance-none border border-nutral-white-03 bg-nutral-white-01 hover:bg-primary-getto50  checked:border-0 rounded-full cursor-pointer duration-500';

let sizeCss = '';

let labelCss = '';

interface BSRadioProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  size?: 'sm' | 'md';
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export default function BSRadio({
  id,
  value,
  name,
  size = 'sm',
  checked = false,
  onChange = () => {},
  children,
}: BSRadioProps) {
  if (size === 'sm') {
    sizeCss = 'w-5 h-5 checked:shadow-getto-line-05';
    labelCss = 'text-textRegular-14';
  } else {
    sizeCss = 'w-6 h-6 checked:shadow-getto-line-06';
    labelCss = 'text-textRegular-16';
  }

  return (
    <div className={`inline-flex items-center wrapCss ${wrapCss} `}>
      <input
        className={`${defaultRadioCss} ${sizeCss}`}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={() => {
          onChange(value);
        }}
      />
      {/* 브라우저에서 HTML 요소의 id 속성은 일반적으로 문자열로 사용, 따라서 id props를 string 타입으로 지정 */}
      <label
        htmlFor={id}
        className={`ml-2 cursor-pointer  ${labelCss} ${checked ? 'text-nutral-black-02' : 'text-nutral-gray-02'}`}
      >
        {children}
      </label>
    </div>
  );
}
