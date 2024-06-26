'use client';

import BSItemList from '@/components/common/BSItemList';
import BSProfile from '@/components/common/BSProfile';
import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {}, []);

  return (
    <div>
      <BSProfile name="하마" />

      <hr className="h-[3px] my-8 border-0 bg-nutral-white-03" />

      <div>
        <p className="text-nutral-black-01 text-textBold-16">하마의 활동</p>
        <BSItemList title="판매 활동" content="20회" />

        <BSItemList title="활동지역" content="지역인증 안함" />
      </div>
    </div>
  );
}
