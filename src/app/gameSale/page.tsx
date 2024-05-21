'use client';

import Image from 'next/image';
import BSButton from '@/components/common/BSButton';
import BSTextarea from '@/components/common/BSTextarea';
import Link from 'next/link';
import CameraIcon from '../../../public/icons/camera.svg';
import GameImage1 from '../../../public/images/gameImage1.png';
import GameImage2 from '../../../public/images/gameImage2.png';
import GameImage3 from '../../../public/images/gameImage3.png';
import GameImage4 from '../../../public/images/gameImage4.png';
import GuideIcon from '../../../public/icons/guide.svg';
import MapPinIcon from '../../../public/icons/map-in.svg';
import BSInput from '@/components/common/BSInput';

export default function Page() {
  const gameCategory = [
    { id: 0, title: '공포' },
    { id: 1, title: '가족' },
    { id: 2, title: '힐링' },
    { id: 3, title: '모험' },
    { id: 4, title: '판타지' },
    { id: 5, title: '코믹' },
    { id: 6, title: '정글' },
    { id: 7, title: '전략' },
    { id: 8, title: '역할' },
    { id: 10, title: '전쟁' },
    { id: 11, title: '시대' },
    { id: 12, title: '파티' },
    { id: 13, title: '전통' },
    { id: 14, title: '어린이' },
    { id: 15, title: '순발력' },
    { id: 16, title: '경쟁' },
  ];

  const gameList = [
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

  // const textCss = 'text-textRegular-14 text-nutral-black-02';

  return (
    <div>
      <div className="py-[30px] border-b border-nutral-white-03">
        {/* image add */}
        <div className="flex flex-col items-center gap-1 p-6 border h-100px w-fit rounded-xl border-primary-getto100">
          <Image
            src={CameraIcon}
            alt="camera icon"
            width={24}
            height={24}
            priority
          />
          <span className="px-2 py-1 rounded-lg bg-primary-getto100 text-primary-getto250 text-textBold-14">
            0/10
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <h1 className="py-6 text-nutral-black-01 text-textBold-16">상품명</h1>
        <Image src={GuideIcon} alt="guide icon" width={24} height={24} />
      </div>

      <BSInput placeholder="상품명을 입력해주세요." value="" />

      {/* 게임소개 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">게임 소개</h1>
      <BSInput placeholder="게시글 제목" value="" />

      <BSTextarea
        placeholder="게임 판매 게시글 내용을 작성해주세요.
친절한 게임 설명은 판매에 도움이 됩니다."
      />

      <div className="flex items-center justify-between">
        <h1 className="py-6 text-nutral-black-01 text-textBold-16">
          대표 카테고리
        </h1>
        <Link
          href="/categoryExplain"
          className="text-textRegular-14 text-nutral-gray-02"
        >
          설명보기
        </Link>
      </div>

      {/* 필요 인원 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">필요 인원</h1>

      <div className="flex">
        <BSInput placeholder="최소 인원" value="" />
        <BSInput placeholder="최대 인원" value="" />
      </div>

      {/* 게임 플레이 시간은 어떤가요? */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        게임 플레이 시간은 어떤가요?
      </h1>

      {/* 판매 가격 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        게임 플레이 시간은 어떤가요?
      </h1>
      <BSInput value="" />
      <span>거래 협의 가능</span>

      {/* 판매 가격 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        제품 상태는 어떤가요?
      </h1>
      <BSInput value="" />

      {/* 판매 가격 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        제품 상태는 어떤가요?
      </h1>

      {/* 판매자 정책에 대해 선택해주세요. */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        판매자 정책에 대해 선택해주세요.
      </h1>
      <BSInput value="" />

      {/* 거래 주소 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        판매자 정책에 대해 선택해주세요.
      </h1>

      <BSButton isSrc={MapPinIcon} onClick={() => {}}>
        현 위치로 주소 지정하기
      </BSButton>

      {/* 카카오톡 오픈 프로필 링크 */}
      <h1 className="py-6 text-nutral-black-01 text-textBold-16">
        카카오톡 오픈 프로필 링크
      </h1>
      <BSInput placeholder="오픈카톡방 링크를 입력해주세요" value="" />

      <div className="flex flex-wrap gap-3">
        {gameCategory.map((item) => (
          <div className="px-4 py-2 border text-primary-getto500 border-primary-getto500 rounded-3xl ">
            {item.title}
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-y-scroll bg-nutral-white-02 rounded-lg  max-h-[456px] px-4 ">
        {/* result 같은 거 있음 */}
        {/* gameList */}
        {gameList.map((item) => (
          <div className="py-3 pt-4 border-b border-nutral-white-03">
            <div className="flex gap-4">
              <Image src={GameImage1} alt="order arrow icon" priority />
              <div className="flex flex-col justify-between">
                <p>{item.title}</p>
                <div className="flex justify-between mt-5">
                  <span>{item.price}&nbsp;원</span>
                  <div className="flex items-center">
                    <span>{item.people}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BSTextarea
        placeholder="게임 판매 게시글 내용을 작성해주세요.
친절한 게임 설명은 판매에 도움이 됩니다."
      />
      <BSButton onClick={() => {}}>등록 완료</BSButton>
    </div>
  );
}
