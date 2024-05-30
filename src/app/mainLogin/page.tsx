'use client';

import BSButton from '@/components/common/BSButton';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import BSHeader from '@/components/common/BSHeader';
import kakaoIcon from '../../../public/icons/kakao.svg';
import googleIcon from '../../../public/icons/google.svg';
import naverIcon from '../../../public/images/naver.png';
import githubIcon from '../../../public/icons/github.svg';
import characterIcon from '../../../public/images/character.png';

export default function Page() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const loginMethods = [
    {
      id: 'kakao',
      icon: kakaoIcon,
      bgColor: '#f9e000',
      text: '카카오톡 로그인',
      href: '/profileRegist',
      onClick: () => {},
    },
    {
      id: 'github',
      icon: githubIcon,
      bgColor: '#313335',
      text: 'GitHub 로그인',
      onClick: () => signIn('github'),
    },
    {
      id: 'google',
      icon: googleIcon,
      bgColor: '#ffffff',
      text: 'Google 로그인',
      mode: 'outlineGray',
      onClick: () => signIn('google'),
    },
    {
      id: 'naver',
      icon: naverIcon,
      bgColor: '#2DB400',
      text: '네이버 로그인',
      onClick: () => signIn('naver'),
    },
  ];

  return (
    <div className="">
      <BSHeader title="로그인 하기" />
      <div className="flex flex-col gap-3 mt-[180px]">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={characterIcon}
            alt="sample-image"
            width={100}
            height={100}
            priority
            data-aos="fade-left"
          />
          <h1
            className="text-headBold-18 text-primary-getto350 "
            data-aos="fade-right"
          >
            간편하게 로그인하고 <br />
            보드살롱을 이용해보세요!
          </h1>
        </div>
        {loginMethods.map((method) =>
          method.href ? (
            <Link key={method.id} href={method.href}>
              <BSButton
                isSrc={method.icon}
                bgColor={method.bgColor}
                mode="text"
                onClick={method.onClick}
              >
                {method.text}
              </BSButton>
            </Link>
          ) : (
            <BSButton
              key={method.id}
              isSrc={method.icon}
              bgColor={method.bgColor}
              mode={method.mode || 'whiteText'}
              onClick={method.onClick}
            >
              {method.text}
            </BSButton>
          )
        )}
      </div>
    </div>
  );
}
