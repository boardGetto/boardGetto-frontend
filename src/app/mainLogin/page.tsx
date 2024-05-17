'use client';

import BSButton from '@/components/common/BSButton';
import kakaoIcon from '../../../public/icons/kakao.svg';
import googleIcon from '../../../public/icons/google.svg';
import naverIcon from '../../../public/images/naver.png';
import githubIcon from '../../../public/icons/github.svg';

export default function Page() {
  return (
    <div className="flex flex-col gap-3 mt-[300px]">
      <h1 className="mb-5 text-textRegular-16">
        간편하게 로그인하고 보드살롱을 이용해보세요!
      </h1>
      <BSButton
        isSrc={kakaoIcon}
        bgColor="#f9e000"
        mode="text"
        onClick={() => {}}
      >
        카카오톡으로 로그인
      </BSButton>
      <BSButton
        bgColor="#313335"
        mode="whiteText"
        isSrc={githubIcon}
        onClick={() => {}}
      >
        GitHub로 로그인
      </BSButton>
      <BSButton
        isSrc={googleIcon}
        mode="outlineGray"
        bgColor="#ffffff"
        onClick={() => {}}
      >
        구글로 로그인
      </BSButton>
      <BSButton
        isSrc={naverIcon}
        mode="whiteText"
        bgColor="#2DB400"
        onClick={() => {}}
      >
        네이버로 로그인
      </BSButton>
    </div>
  );
}
