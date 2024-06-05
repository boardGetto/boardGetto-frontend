
"use client"

import BSIcon from '@/components/common/BSIcon';
import { useRouter } from 'next/navigation';
import BSHeader from '@/components/common/BSHeader';
import FilterIcon from '../../../../../public/icons/filter.svg';

export default function Page() {

  const router = useRouter();

  const textCss = 'text-textRegular-14 text-nutral-black-02';

  return (
    <div className="flex flex-col">
        <BSHeader title='검색 필터' isClose/>
      <div className="flex items-center py-[14px]">
        <h1 className="text-primary-getto500 text-textBold-14 mr-[14px]">
          연관검색
        </h1>
      </div>

      {/* option start */}
      <div className="flex justify-around py-6 border-t border-b border-nutral-white-03">
        <div className="flex items-center gap-[10px]">
          <p className={textCss}>최신순</p>
        </div>

        <div className="flex items-center gap-[10px]">
          <p className={textCss}>필터</p>
          <BSIcon 
            iconUrl={FilterIcon}
            alt='filter icon'
            onClick={()=>{router.push('/search/filter')}}
          />
        </div>

      </div>
    
    </div>
  );
}
