'use client';

import { useState } from 'react';
import BSButton from '@/components/common/BSButton';
import { useRouter } from 'next/navigation';
import BSHeader from '@/components/common/BSHeader';
import Link from 'next/link';
import BSChip from '@/components/common/BSChip';

export default function Page() {
  const router = useRouter();

  const [recommendList, setRecommendList] = useState([
    { id: 0, title: '방탈출' },
    { id: 1, title: '할로윈' },
    { id: 2, title: '파티' },
    { id: 3, title: '커플게임' },
    { id: 4, title: '빙고' },
    { id: 5, title: '전략게임' },
    { id: 6, title: '방탈출게임' },
    { id: 7, title: '파티게임' },
  ]);

  const gameLevel = [
    { id: 0, level: '최상' },
    { id: 1, level: '상' },
    { id: 2, level: '중' },
    { id: 3, level: '하' },
  ];

  const handleInitClick = () => {
    // todo
  };

  const handleSearchClick = () => {
    // todo
  };

  return (
    <div className="flex flex-col">
      <BSHeader title="카테고리 검색" />
      {/* 1. 좋아하는 게임 */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="py-6 text-nutral-black-01 text-textBold-16">
            좋아하는 게임
          </h1>
          <Link
            href="/categoryExplain"
            className="text-textRegular-14 text-nutral-gray-02"
          >
            설명보기
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {recommendList.map((item) => (
            <BSChip>{item.title}</BSChip>
          ))}
        </div>
      </div>
      {/* 2. 게임 난이도는 어떤가요? */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        게임 난이도는 어떤가요?
      </h1>
      {gameLevel.map((item) => (
        <div>
          <input type="checkbox" />
          <label htmlFor="level">{item.level}</label>
        </div>
      ))}
      {/* 3. 필요 인원 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">필요 인원</h1>

      {/* 4. 게임 플레이 시간은 어떤가요? */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        게임 플레이 시간은 어떤가요?
      </h1>
      <div className="flex">
        {/* 🖐️ todo : 이런 경우는 className을 컴포넌트 안에 넣어야하나, 그렇게 되면 스타일링 지정한 것들이 효율적이지 못하게 되는 거아닌가 태그가 많은 건 안좋다 방안필요 */}
        <div className="grow-[1]">
          <BSButton onClick={handleInitClick}>초기화</BSButton>
        </div>
        <div className="grow-[2]">
          <BSButton mode="main" onClick={handleSearchClick}>
            검색하기
          </BSButton>
        </div>
      </div>

      {/* 5. 가격 */}
      <div className="flex items-center">
        <h1 className="py-6 text-nutral-black-01 text-textBold-16">가격</h1>
        <span className="text-primary-getto500 text-textRegular-14">
          1,000원 ~ 78,000,000원
        </span>
      </div>
    </div>
  );
}
