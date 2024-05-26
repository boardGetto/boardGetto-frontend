'use client';

import MyActiveTab from '@/components/MyActiveTab';
import { useState } from 'react';
import Image from 'next/image';

import BSBadge from '@/components/common/BSBadge';
import GameImage1 from '../../../../public/images/gameImage1.png';
import GameImage2 from '../../../../public/images/gameImage2.png';
import GameImage3 from '../../../../public/images/gameImage3.png';
import GameImage4 from '../../../../public/images/gameImage4.png';
import PersonIcon from '../../../../public/icons/person.svg';
import LikeIcon from '../../../../public/icons/like-fill.svg';

const mySalseGameList = [
  {
    id: 0,
    title: '게임이름1',
    img: GameImage1,
    new: 'true',
    price: '150000',
    people: '3~5',
    like: true,
    account: 1,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
  {
    id: 1,
    title: '게임이름2',
    img: GameImage2,
    new: 'true',
    price: '150000',
    people: '1~2',
    like: true,
    account: 14,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
  {
    id: 2,
    title: '게임이름1',
    img: GameImage3,
    new: 'true',
    price: '150000',
    people: '3~5',
    like: true,
    account: 22,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
  {
    id: 3,
    title: '게임이름1',
    img: GameImage4,
    new: 'true',
    price: '150000',
    people: '3~5',
    like: true,
    account: 22,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
];

const myInterestList = [
  {
    id: 0,
    title: '게임이름1',
    img: GameImage1,
    new: 'true',
    price: '150000',
    people: '3~5',
    like: true,
    account: 1,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
  {
    id: 1,
    title: '게임이름2',
    img: GameImage2,
    new: 'true',
    price: '150000',
    people: '1~2',
    like: true,
    account: 14,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
  {
    id: 2,
    title: '게임이름1',
    img: GameImage3,
    new: 'true',
    price: '150000',
    people: '3~5',
    like: true,
    account: 22,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
  {
    id: 3,
    title: '게임이름1',
    img: GameImage4,
    new: 'true',
    price: '150000',
    people: '3~5',
    like: true,
    account: 22,
    address: '강남구 압구정동',
    time: '3시간 전',
    tag: ['전략', '테마', '전쟁'],
  },
];

export default function Page() {
  const [currentTab, setCurrentTab] = useState('0');

  return (
    <div>
      <MyActiveTab value={currentTab} onChange={setCurrentTab} />
      {currentTab === '0' &&
        mySalseGameList.map((item) => (
          <div
            key={item.id}
            className="py-3 pt-4 border-b border-nutral-white-03"
          >
            <div className="flex gap-4">
              <Image src={item.img} alt={item.title} priority />
              <div className="flex flex-col justify-between">
                <p>{item.title}</p>
                {item.new && <BSBadge status="isAuth">새제품</BSBadge>}
                <div className="flex justify-between mt-5">
                  <span>{item.price}&nbsp;원</span>
                  <div className="flex items-center">
                    <Image
                      src={PersonIcon}
                      alt="person icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <span>{item.people}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1 text-textRegular-14 text-nutral-black-02">
                <Image
                  src={LikeIcon}
                  alt="like icon"
                  width={16}
                  height={16}
                  priority
                />
                {item.account}
              </div>
              <p className="text-captionRegular-12 text-nutral-gray-02">
                {item.address}
                <span>{item.time}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
