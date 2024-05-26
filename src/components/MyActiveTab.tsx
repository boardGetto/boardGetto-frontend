import BSChip from './common/BSChip';
import BSTab from './common/BSTab';

const defaultCss = 'flex flex-wrap gap-2 px-4 py-3 bg-nutral-white-02';

const MyActive = [
  { id: '0', title: '판매 게임' },
  { id: '1', title: '관심 게임' },
];

const SaleGame = [
  { id: '0', status: '판매중' },
  { id: '1', status: '판매 완료' },
  { id: '2', status: '비공개' },
];

interface MyActiveProps {
  value: string;
  onChange: (value: string) => void;
}
export default function MyActiveTab({ value, onChange }: MyActiveProps) {
  return (
    <BSTab dataList={MyActive} value={value} onChange={onChange}>
      <div className={value === '0' ? defaultCss : ''}>
        {value === '0' &&
          SaleGame.map((item) => <BSChip>{item.status}</BSChip>)}
      </div>
    </BSTab>
  );
}
