'use client';

import SearchItemResult from '@/components/SearchItemResult';
import BSBadge from '@/components/common/BSBadge';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
// import PersonIcon from '../../../../public/icons/user.svg';

export default function Page() {
  const router = useRouter();
  const tabList = [
    { id: 0, label: '연관검색' },
    { id: 1, label: '게임이름' },
    { id: 2, label: '게임이름' },
    { id: 3, label: '커플게임' },
    { id: 4, label: '빙고' },
    { id: 5, label: '전략게임' },
    { id: 6, label: '파티게임' },
  ];

  const itemList = [
    { id: 0, src: '', price: '15000', count: '2~3', title: '할리갈리' },
    { id: 1, src: '', price: '15000', count: '2~3', title: '뱅' },
    { id: 2, src: '', price: '15000', count: '2~3', title: '달무티' },
    { id: 3, src: '', price: '15000', count: '2~3', title: '젠가' },
    { id: 4, src: '', price: '15000', count: '2~3', title: '발렌타인데이' },
    { id: 5, src: '', price: '15000', count: '2~3', title: '연애편지' },
    { id: 6, src: '', price: '15000', count: '2~3', title: '루미큐브' },
  ];

  return (
    <div className="flex flex-col gap-14">
      <div>
        <ul className="flex gap-3 max-w-[340px]">
          {itemList.map((item) => (
            <li key={item.title}>
              <div>
                <Image
                  src={item.src}
                  alt="MyProfile"
                  width={100}
                  height={100}
                  priority
                />
                <p>{item.title}</p>
                <BSBadge status="isAuth">새 제품</BSBadge>
                <div>
                  <span>{item.price}원</span>
                  <div className="">
                    {/* <Image
                      src={PersonIcon}
                      alt="PersonIcon"
                      width={100}
                      height={100}
                      priority
                    /> */}
                    <span>{item.count}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="my-6 text-nutral-black-02 text-headBold-20">
          보드살롱과 비슷해요!
        </p>
      </div>
    </div>
  );
}
