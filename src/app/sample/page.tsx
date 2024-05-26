'use client';

import MyActiveTab from '@/components/MyActiveTab';
import BSButton from '@/components/common/BSButton';
import BSChip from '@/components/common/BSChip';
import BSHelpBox from '@/components/common/BSHelpBox';
import BSInput from '@/components/common/BSInput';
import BSTextarea from '@/components/common/BSTextarea';
import { useState } from 'react';

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

  const [currentTab, setCurrentTab] = useState('0');

  return (
    <div className="flex flex-col gap-8">
      {/* chip */}
      <section>
        <h1 className="my-4">chip</h1>
        {/* 🖐️ todo: 'flex flex-wrap gap-3'도 다른 페이지에 동일하게 적용되는 거라 공통 컴포넌트 BSChip 안에 넣어야함 */}
        {/* 🖐️ todo: 'checked 시 색상 변경 */}
        <div className="flex flex-wrap gap-3">
          {gameList.map((item) => (
            <BSChip key={item.id}>{item.title}</BSChip>
          ))}
        </div>
      </section>

      {/* input */}
      <section className="flex flex-col gap-4">
        <h1 className="my-4">input</h1>
        <BSInput searchImg value="" />
        <BSInput value="" />
        <BSInput value="" isError errorMsg="에러메세지" />
        <BSInput value="" disabled />
      </section>

      {/* button */}
      <section className="flex flex-col gap-3">
        <h1 className="my-4">button</h1>
        <BSButton mode="main" onClick={() => {}}>
          보드살롱
        </BSButton>
        <BSButton mode="soft" onClick={() => {}}>
          보드살롱
        </BSButton>
        <BSButton mode="outlineGray" onClick={() => {}}>
          보드살롱
        </BSButton>
        <BSButton mode="text" onClick={() => {}}>
          보드살롱
        </BSButton>
        <BSButton mode="whiteText" onClick={() => {}}>
          보드살롱
        </BSButton>
      </section>

      {/* Textarea */}
      <section className="flex flex-col gap-3">
        <h1 className="my-1">Textarea</h1>
        <BSTextarea value="" />
      </section>

      {/* Tab */}
      <section className="flex flex-col gap-3">
        <h1 className="my-1">Tab</h1>
        <p>현재 탭 : {currentTab}</p>
        <MyActiveTab value={currentTab} onChange={setCurrentTab} />
      </section>

      {/* Tooltip */}
      <section className="flex flex-col gap-3">
        <h1 className="my-1">Tooltip</h1>
        <BSHelpBox position="bottom" content="test">
          test
        </BSHelpBox>
      </section>
    </div>
  );
}
