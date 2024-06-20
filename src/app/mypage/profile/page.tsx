'use client';

import BSItemList from '@/components/common/BSItemList';
import BSProfile from '@/components/common/BSProfile';
import { useEffect, useState } from 'react';
import { fetchUser } from '../../modules/api';

export default function Profile() {
  const [testNick, setTextNick] = useState();
  useEffect(() => {
    async function fetch() {
      const res = await fetchUser();

      setTextNick(res.name);
      console.log(res);
    }

    fetch();
  }, []);

  return (
    <div>
      <BSProfile name="하마" />

      <hr className="h-[3px] my-8 border-0 bg-nutral-white-03" />

      <div>
        <p className="text-nutral-black-01 text-textBold-16">
          {testNick}의 활동
        </p>
        <BSItemList title="판매 활동" content="20회" />

        <BSItemList title="활동지역" content="지역인증 안함" />
      </div>
    </div>
  );
}
