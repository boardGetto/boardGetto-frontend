'use client';

import BSButton from '@/components/common/BSButton';
import Link from 'next/link';
import kakaoIcon from '../../../public/icons/kakao.svg';
import googleIcon from '../../../public/icons/google.svg';
import naverIcon from '../../../public/images/naver.png';
import githubIcon from '../../../public/icons/github.svg';

export default function Page() {
  return (
    <div className="flex flex-col gap-3 mt-[240px]">
      <h1 className="mb-4 text-center text-headBold-18 text-primary-getto350 ">
        간편하게 로그인하고 <br />
        보드살롱을 이용해보세요!
      </h1>
      <Link href="/profileRegist">
        <BSButton
          isSrc={kakaoIcon}
          bgColor="#f9e000"
          mode="text"
          onClick={() => {}}
        >
          카카오톡 로그인
        </BSButton>
      </Link>
      <BSButton
        bgColor="#313335"
        mode="whiteText"
        isSrc={githubIcon}
        onClick={() => {}}
      >
        GitHub 로그인
      </BSButton>
      <BSButton
        isSrc={googleIcon}
        mode="outlineGray"
        bgColor="#ffffff"
        onClick={() => {}}
      >
        Google 로그인
      </BSButton>
      <BSButton
        isSrc={naverIcon}
        mode="whiteText"
        bgColor="#2DB400"
        onClick={() => {}}
      >
        네이버 로그인
      </BSButton>
    </div>
  );
}
