'use client';

import Image from 'next/image';
import BSBadge from '@/components/common/BSBadge';
import BSButton from '@/components/common/BSButton';
import GameImage1 from '../../../public/images/gameImage1.png';
import LikeIcon from '../../../public/icons/like-blank.svg';
import BSHeader from '@/components/common/BSHeader';

export default function Page() {
  const gameList = {
    id: 0,
    profile: LikeIcon,
    nick: '하마',
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
    level: '난이도 상',
    gategory: '전략게임',
    playTime: '1시간 이상',
    itemStatus: '사용감 있음',
    content:
      '어쩌고 저쩌고 이래서 팔아요. 잘 하고 싶었는데 생각보다 손이 잘 안가네요. 어쩔 수 없지요. 저보다 더 잘 갖고 놀아주실 사람을 찾아요. 어쩌고 어쩌공 오오오오',
  };

  return (
    <div>
      <BSHeader isBack />
      <div className="flex items-center">
        <Image
          src={gameList.img}
          alt="camera icon"
          width={60}
          height={60}
          priority
        />
        <span className="py-4 pb-6 text-nutral-black-02 text-textBold-16">
          {gameList.nick}
        </span>
        <span>{gameList.title}</span>
      </div>
      <Image src={LikeIcon} alt="camera icon" width={24} height={24} />
      <p>{gameList.title}</p>
      <div>
        <p>{gameList.price}</p>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="py-6 text-nutral-black-02 text-headBold-18">
          판매자의 게임 소개
        </h1>
        <BSBadge>{gameList.level}</BSBadge>
      </div>

      <ul className="flex flex-col gap-2 p-4 mb-6 bg-nutral-white-02 rounded-2xl text-textRegular-14">
        <li className="flex justify-between">
          <span>게임이름</span> <span>{gameList.title}</span>
        </li>
        <li className="flex justify-between">
          대표 카테고리
          <span>{gameList.gategory}</span>
        </li>
        <li className="flex justify-between">
          게임 예상 플레이 시간
          <span>{gameList.playTime}</span>
        </li>
        <li className="flex justify-between">
          플레이 인원
          <span>{gameList.people}명</span>
        </li>
      </ul>

      <BSButton mode="outlineRed" onClick={() => {}}>
        외부 게임 소개 더보기
      </BSButton>

      <div className="flex items-center justify-between mt-8">
        <h1 className="py-6 text-nutral-black-02 text-headBold-18">
          게임 상태 설명
        </h1>
        <BSBadge>{gameList.itemStatus}</BSBadge>
      </div>

      <ul className="flex flex-col gap-2 p-4 my-6 bg-nutral-white-02 rounded-2xl text-textRegular-14">
        <li className="flex justify-between">
          게임 전체 상태 <span>{gameList.title}</span>
        </li>
        <li className="flex justify-between">
          구성품 훼손 있음
          <span>{gameList.gategory}</span>
        </li>
        <li className="flex justify-between">
          구성품 누락 있음
          <span>{gameList.playTime}</span>
        </li>
      </ul>

      <div className="p-4 bg-nutral-white-02 rounded-2xl text-textRegular-16 text-nutral-gray-03">
        {gameList.content}
      </div>

      <h1 className="py-6 text-nutral-black-02 text-headBold-18">
        하마님의 다른 판매 게임
      </h1>

      {/* OrderGameListCard */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          <Image src={gameList.img} alt="img icon" width={120} height={100} />
          <p>{gameList.title}</p>
          <p>{gameList.gategory}</p>
        </div>
      </div>

      <BSButton size="lg" mode="main" onClick={() => {}}>
        <div className="flex items-center gap-24">
          <span>{gameList.price}&nbsp;원</span>
          <span className="px-6 py-1 rounded-md bg-nutral-white-01 text-primary-getto350">
            거래문의
          </span>
        </div>
      </BSButton>
    </div>
  );
}
