'use client';

import BSBadge from '@/components/common/BSBadge';
import BSIcon from '@/components/common/BSIcon';
import { useRouter } from 'next/navigation';
import BSHeader from '@/components/common/BSHeader';
import BSInput from '@/components/common/BSInput';
import BSText from '@/components/common/BSText';
import gameList from '@/data';
import BSCard from '@/components/common/BSCard';
import FilterIcon from '../../../../../public/icons/filter.svg';
import CheckBoxFill from '../../../../../public/icons/checkbox-fill.svg';
// import CheckBoxBlank from '../../../../../public/icons/checkbox-blank.svg';
import DownArrow from '../../../../../public/icons/down-arrow.svg';

export default function Page() {
  const router = useRouter();

  const sameGames = [
    { id: 0, title: '게임이름1' },
    { id: 1, title: '게임이름2' },
    { id: 2, title: '게임이름3' },
  ];

  return (
    <div className="flex flex-col">
      {/* header */}
      <BSHeader isBack>
        <BSInput placeholder="보드게임 검색하기" searchImg value="" />
      </BSHeader>
      {/* header end */}
      <div className="flex items-center py-[14px]">
        <BSText className="mr-[14px]" color='getto500'>연관검색</BSText>
        <ul className="flex gap-2">
          {sameGames.map((item) => (
            <li key={item.id}>
              <BSBadge status="normal">{item.title}</BSBadge>
            </li>
          ))}
        </ul>
      </div>

      {/* option start */}
      <div className="flex justify-around py-6 border-t border-b border-nutral-white-03">
        <div className="flex items-center gap-[10px]">
          <BSText size="TextRegular14">최신순</BSText>
          <BSIcon iconUrl={DownArrow} alt="order arrow" />
        </div>

        <div className="flex items-center gap-[10px]">
          <BSText size="TextRegular14">필터</BSText>
          <BSIcon
            iconUrl={FilterIcon}
            alt="filter icon"
            onClick={() => {
              router.push('/search/filter');
            }}
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <BSIcon iconUrl={CheckBoxFill} alt="checkbox icon" />
          {/* <BSIcon iconUrl={CheckBoxBlank} alt="checkbox icon" /> */}
          <BSText size="TextRegular14">새 제품만 보기</BSText>
        </div>
      </div>
      {/* option end */}

      {/* gameList */}
      {gameList.map((game) => (
        <BSCard
          key={game.id}
          title={game.title}
          gameName={game.boardGameTitle}
          price={game.price}
          minPlayerCount={game.minPlayerCount}
          maxPlayerCount={game.maxPlayerCount}
          createdAt={game.createdAt}
          interestCount={game.interestCount}
        />
      ))}
    </div>
  );
}
