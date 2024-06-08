'use client';

import BSHeader from '@/components/common/BSHeader';

export default function Page() {
  return (
    <div className="flex flex-col">
      <BSHeader title="검색 필터" isClose />
      <h1 className="pt-6 pb-[14px] text-nutral-black-01 text-textBold-16">
        제품 상태
      </h1>

      <h1 className="pt-6 pb-[14px] text-nutral-black-01 text-textBold-16">
        판매자 정첵
      </h1>

      <h1 className="pt-6 pb-[14px] text-nutral-black-01 text-textBold-16">
        난이도
      </h1>

      <div className="pt-6 pb-[14px] flex items-center">
        <h1 className=" text-nutral-black-01 text-textBold-16">가격</h1>
        <span className="ml-4 text-primary-getto500 text-captionRegular-12">
          1,000원 ~ 78,000,000원
        </span>
      </div>
    </div>
  );
}
