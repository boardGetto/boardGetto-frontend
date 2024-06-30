'use client';

import BSHeader from '@/components/common/BSHeader';
import BSText from '@/components/common/BSText';

export default function Page() {
  return (
    <div className="flex flex-col">
      <BSHeader title="검색 필터" isClose />

      <BSText size="TextBold16" isHeadLine>
        제품 상태
      </BSText>

      <BSText size="TextBold16" isHeadLine>
        판매자 정첵
      </BSText>

      <BSText size="TextBold16" isHeadLine>
        난이도
      </BSText>

      <div className="flex items-center">
        <BSText size="TextBold16" isHeadLine>
          가격
        </BSText>
        <span className="mt-2 ml-4 text-primary-getto500 text-captionRegular-12">
          1,000원 ~ 78,000,000원
        </span>
      </div>
    </div>
  );
}
