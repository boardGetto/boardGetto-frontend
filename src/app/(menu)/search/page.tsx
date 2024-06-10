'use client';

import { useState } from 'react';
import BSBadge from '@/components/common/BSBadge';
import BSButton from '@/components/common/BSButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CloseIcon from '../../../../public/icons/close.svg';
import BSInput from '@/components/common/BSInput';
import BSHeader from '@/components/common/BSHeader';

export default function Page() {
  const router = useRouter();

  const [recommendList, setRecommendList] = useState([
    { id: 0, title: '방탈출' },
    { id: 1, title: '할로윈' },
    { id: 2, title: '파티' },
    { id: 3, title: '커플게임' },
    // { id: 4, title: '빙고' },
    // { id: 5, title: '전략게임' },
    // { id: 6, title: '방탈출게임' },
    // { id: 7, title: '파티게임' },
  ]);

  const handleSearch = () => {
    router.push('/search/result');
  };

  const handleCategory = () => {
    router.push('/categorySearch');
  };

  const removeBtn = (id: number) => {
    setRecommendList((prevList) => {
      const newList = [...prevList];
      const index = newList.findIndex((item) => item.id === id);
      if (index !== -1) {
        newList.splice(index, 1);
      }
      return newList;
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <BSHeader isBack>
        <BSInput placeholder="보드게임 검색하기" searchImg value="" />
      </BSHeader>
      <div>
        <h1 className="py-4 text-nutral-gray-02 textRegular-16">최근 검색어</h1>
        {recommendList.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between hover:bg-primary-getto50"
          >
            <p className="py-3 text-textRegular-14 text-nutral-black-01">
              {item.title}
            </p>
            <Image
              src={CloseIcon}
              alt="Close icon"
              width={24}
              height={24}
              priority
              onClick={() => removeBtn(item.id)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div>
        <h1 className="py-4 text-nutral-gray-02 textRegular-16">추천 검색어</h1>
        <div className="flex flex-wrap gap-3">
          {recommendList.map((item) => (
            <BSBadge key={item.id} status="normal">
              {item.title}
            </BSBadge>
          ))}
        </div>
      </div>

      <BSButton onClick={handleSearch}>검색하기</BSButton>

      <h1 className="text-nutral-gray-02 textRegular-16">
        상세하게 원하는 게임을 찾고 싶다면?
      </h1>

      <BSButton onClick={handleCategory}>카테고리 검색하기</BSButton>
    </div>
  );
}
