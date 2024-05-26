'use client';

const defaultCss =
  'hover:text-nutral-gray-02 text-nutral-gray-01 py-4 px-3.5 border-b-[3px] border-nutral-white-03';
const clickCss =
  'text-primary-getto500 hover:text-primary-getto200 border-b-[3px] border-primary-getto500';

export interface TabData {
  id: string;
  title: string;
}

interface BSTabProps {
  dataList: TabData[];
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
}

export default function BSTab({
  dataList,
  value,
  onChange,
  children,
}: BSTabProps) {
  return (
    <div>
      <ul className="flex w-full overflow-x-auto text-textBold-14 whitespace-nowrap">
        {dataList.map((item) => (
          <li key={item.id}>
            <button
              className={`${defaultCss} ${value === item.id && clickCss}`}
              type="button"
              onClick={() => onChange(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
        <li className="w-full border-b-[3px] border-nutral-white-03" />
      </ul>
      {children}
    </div>
  );
}
