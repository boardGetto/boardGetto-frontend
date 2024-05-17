import Image from 'next/image';
import CloseIcon from '../../public/icons/close.svg';

const resultList = [
  { id: 0, name: '스컬킹2' },
  { id: 1, name: '뱅2' },
  { id: 2, name: '루미큐브' },
];

export default function SearchItemResult() {
  return (
    <div>
      {resultList.length > 0 ? (
        resultList.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-3 opacity-80"
          >
            <p className="text-nutral-black-01 text-textRegular-14">
              {item.name}
            </p>
            <Image
              src={CloseIcon}
              alt="CloseIcon"
              width={24}
              height={24}
              priority
              className="cursor-pointer"
            />
          </div>
        ))
      ) : (
        <p className="text-nutral-gray-03 text-bodyRegular-14">
          검색한 게임이 없습니다.
        </p>
      )}
    </div>
  );
}
