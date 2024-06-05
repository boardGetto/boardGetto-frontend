'use client';

import BSHeader from '@/components/common/BSHeader';
import { useState } from 'react';
import BSIcon from '@/components/common/BSIcon';
import ArrowIcon from '../../../public/icons/right-arrow.svg';

interface GameCategory {
  id: number;
  title: string;
  sum: string;
  content: string;
  isShow: boolean;
  clicked: boolean;
}

const GAME_CATEGORY: GameCategory[] = [
  {
    id: 0,
    title: '전략 게임',
    sum: '머리를 써서 추리하거나 전략을 짭니다.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false, // 초기 상태를 false로 설정
  },
  {
    id: 1,
    title: '가족 게임',
    sum: '다양한 연령대와 구성원들이 즐길 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false,
  },
  {
    id: 2,
    title: '파티 게임',
    sum: '가볍지만 즐겁게 아이스브레이킹용으로 플레이를 할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false,
  },
  {
    id: 3,
    title: '테마 게임',
    sum: '드라마와 영화와 같은 컨셉을 정해 몰입할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false,
  },
  {
    id: 4,
    title: '전쟁 게임',
    sum: '복잡한 전쟁과 역사를 기반으로 진지하게 플레이할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false,
  },
  {
    id: 5,
    title: '수집 게임',
    sum: '게임의 구성요소를 수집하거나 커스터마이징 할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false,
  },
  {
    id: 6,
    title: '추상 게임',
    sum: '구성요소나 룰은 간단하지만 전략적인 플레이를 해야해요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    isShow: false,
    clicked: false,
  },
];

export default function Page() {
  const [gameCategory, setGameCategory] =
    useState<GameCategory[]>(GAME_CATEGORY);

  const handleToggleClick = (id: number) => {
    setGameCategory((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, isShow: !category.isShow, clicked: true }
          : // 이전 상태를 유지하면서 새로운 상태값을 만들어야함
            { ...category, clicked: false }
      )
    );
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <BSHeader title="대표 카테고리 설명" />
      {gameCategory.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col gap-4 border rounded-xl  shadow px-4 pt-8 pb-10 ${item.clicked ? 'border-primary-getto500 duration-700' : 'border-nutral-white-02 duration-700'}`}
        >
          <div className="flex justify-between">
            <p
              className={`text-nutral-black-01 text-textBold-16 ${item.clicked ? 'text-primary-getto500' : ''}`}
            >
              {item.title}
            </p>
            <BSIcon
              iconUrl={ArrowIcon}
              className={`mr-4 ${item.isShow ? '-rotate-90 duration-300' : 'rotate-90 duration-300'}`}
              color={item.clicked ? '#FB4846' : ''}
              onClick={() => handleToggleClick(item.id)}
              alt="arrow-icon"
            />
          </div>
          <p className="text-nutral-black-01 text-bodyRegular-15">{item.sum}</p>

          {item.isShow && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
