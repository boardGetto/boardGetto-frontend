'use client';

import Image from 'next/image';
import BSButton from '@/components/common/BSButton';
import BSHeader from '@/components/common/BSHeader';
import BSInput from '@/components/common/BSInput';
import BSTextarea from '@/components/common/BSTextarea';
import ProfileSample from '../../../public/icons/myprofile.svg';
import CameraIcon from '../../../public/icons/camera.svg';
import MapPinIcon from '../../../public/icons/map-in.svg';

export default function Page() {
  const gameList = [
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
  return (
    <div>
      <BSHeader title="프로필 작성하기" rightText="건너뛰기" link="/mypage" />
      <div className="relative flex flex-col gap-4 items-center justify-center mt-6 pb-[50px] border-b border-nutral-white-03 ">
        <Image
          src={ProfileSample}
          alt="profile sample icon"
          width={90}
          height={90}
          priority
        />

        <Image
          src={CameraIcon}
          alt="camera icon"
          width={28}
          height={28}
          className="absolute p-1.5 mt-4 ml-16 rounded-full bg-primary-getto50"
        />
        <BSInput placeholder="프로필명 입력" value="" />
      </div>

      <h1 className="pt-6 pb-3 text-nutral-black-01 text-textBold-16">
        나의 활동
      </h1>
      <BSButton isSrc={MapPinIcon} onClick={() => {}}>
        활동 주소 입력하기
      </BSButton>

      <h1 className="pt-6 pb-3 text-nutral-black-01 text-textBold-16">
        프로필 소개
      </h1>

      <BSTextarea placeholder="나의 프로필 소개를 입력해주세요." value="" />

      <h1 className="pt-6 pb-3 text-nutral-black-01 text-textBold-16">
        좋아하는 게임
      </h1>

      <div className="flex flex-wrap gap-3 mb-20">
        {gameList.map((item) => (
          <div className="px-4 py-2 border text-primary-getto500 border-primary-getto500 rounded-3xl ">
            {item.title}
          </div>
        ))}
      </div>

      <div className="fixed bottom-0">
        <BSButton mode="main" onClick={() => {}}>
          저장하기
        </BSButton>
      </div>
    </div>
  );
}
