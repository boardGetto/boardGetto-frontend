'use client';

import SearchItemResult from '@/components/SearchItemResult';
import BSBadge from '@/components/common/BSBadge';
import BSButton from '@/components/common/BSButton';
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const itemList = [
    { id: 0, label: '방탈출' },
    { id: 1, label: '할로윈' },
    { id: 2, label: '파티' },
    { id: 3, label: '커플게임' },
    { id: 4, label: '빙고' },
    { id: 5, label: '전략게임' },
    { id: 6, label: '파티게임' },
  ];

  const handleSearch = () => {
    router.push('/search/resultList');
  };
  return (
    <div className="flex flex-col gap-14">
      <div>
        <p className="my-4 text-nutral-gray-02">최근 검색어</p>
        <SearchItemResult />
        <p className="my-4 text-nutral-gray-02">추천 검색어</p>

        <ul className="flex flex-wrap gap-3 max-w-[340px]">
          {itemList.map((item) => (
            <li key={item.label}>
              <BSBadge>{item.label}</BSBadge>
            </li>
          ))}
        </ul>
      </div>

      <BSButton
        onClick={() => {
          router.push('/gameSearch/result');
        }}
      >
        검색하기
      </BSButton>

      <div>
        <p className="my-4 text-nutral-gray-02">
          상세하기 원하는 게임을 찾고 싶다면?
        </p>

        <BSButton onClick={handleSearch}>카테고리 검색하기</BSButton>
      </div>
    </div>
  );
}
