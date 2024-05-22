'use client';

import BSHeader from '@/components/common/BSHeader';
import { useState } from 'react';
import Image from 'next/image';
import ToggleBtn from '../../../public/icons/right-arrow.svg';

export default function Page() {
  const [isShow, setIsShow] = useState(false);

  const gameCategory = [
    {
      id: 0,
      title: '전략 게임',
      subTitle: '머리를 써서 추리하거나 전략을 짭니다.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
    {
      id: 1,
      title: '가족 게임',
      subTitle: '다양한 연령대와 구성원들이 즐길 수 있어요.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
    {
      id: 2,
      title: '파티 게임',
      subTitle: '가볍지만 즐겁게 아이스브레이킹용으로 플레이를 할 수 있어요.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
    {
      id: 3,
      title: '테마 게임',
      subTitle: '드라마와 영화와 같은 컨셉을 정해 몰입할 수 있어요.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
    {
      id: 4,
      title: '전쟁 게임',
      subTitle: '복잡한 전쟁과 역사를 기반으로 진지하게 플레이할 수 있어요.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
    {
      id: 5,
      title: '수집 게임',
      subTitle: '게임의 구성요소를 수집하거나 커스터마이징 할 수 있어요.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
    {
      id: 6,
      title: '추상 게임',
      subTitle: '구성요소나 룰은 간단하지만 전략적인 플레이를 해야해요.',
      content:
        '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
    },
  ];

  const handleToggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="flex flex-col">
      <BSHeader title="대표 카테고리 설명" />
      {gameCategory.map((item) => (
        <div className="flex flex-col gap-[14px] border border-nutral-white-02 rounded-xl shadow-md px-4 pt-8 pb-10">
          <div className="flex justify-between">
            <p className=" text-nutral-black-01 text-textBold-16">
              {item.title}
            </p>
            <Image
              src={ToggleBtn}
              alt="toggle-arrow"
              width={24}
              height={24}
              priority
              className={`mr-4 cursor-pointer ${isShow ? '-rotate-2' : 'rotate-90'}`}
              onClick={handleToggleClick}
            />
          </div>
          <p className=" text-nutral-black-01 text-bodyRegular-15">
            {item.subTitle}
          </p>

          {isShow && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
