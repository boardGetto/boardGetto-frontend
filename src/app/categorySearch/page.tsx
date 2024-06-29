'use client';

import BSHeader from '@/components/common/BSHeader';
import BSInput from '@/components/common/BSInput';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SearchThemeGame, fetchSearchThemeGame } from '@/service/gameService';
import BSBadge from '@/components/common/BSBadge';
import BSText from '@/components/common/BSText';
import GameImage1 from '../../../public/images/gameImage1.png';

export default function Page() {
  const [themeGame, setThemeGame] = useState<SearchThemeGame>({
    content: [],
    empty: true,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 0,
    pageable: {
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      paged: true,
      unpaged: false,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
    },
    size: 10,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const searchThemeGames = await fetchSearchThemeGame();
        setThemeGame(searchThemeGames);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  type GameLevel = 'MEDIUM' | 'HARD' | 'VERY_HARD';

  const gameLevel: Record<GameLevel, string> = {
    MEDIUM: '하',
    HARD: '중',
    VERY_HARD: '상',
  };

  return (
    <div className="flex flex-col">
      <BSHeader title="테마 검색하기" isClose isBack />
      <BSText type="TextBold16" isHeadLine>
        상품명
      </BSText>
      <BSInput placeholder="찾으려는 게임을 검색해보세요" value="" searchImg />
      {loading ? (
        // TODO : Loading 아이콘 추가 예정
        <p>검색내용 없음</p>
      ) : (
        <div className="mt-4 overflow-y-scroll bg-nutral-white-02 rounded-lg  max-h-[456px] px-4 ">
          {themeGame?.content.map((item) => (
            <div
              className="py-3 pt-4 border-b border-nutral-white-03"
              key={item.id}
            >
              <div className="flex gap-4">
                <Image src={GameImage1} alt="order arrow icon" priority />
                <div className="flex flex-col justify-between">
                  <p className="text-textBold-14">{item.title}</p>
                  <p className="text-bodyRegular-14">
                    난이도
                    <span className="p-1 ml-1 rounded-md bg-caption-subBlue01 text-caption-subBlue02">
                      {gameLevel[item.difficulty as GameLevel] || '없음'}
                    </span>
                  </p>
                  {/* 인원 수 keep */}
                  {/* <span>
                        {item.minPlayerCount} ~ {item.maxPlayerCount}
                      </span> */}
                  {/* <span>{item.playTime}</span> */}

                  {item.themes.map((theme) => (
                    <BSBadge isHashTag key={theme}>
                      {theme}
                    </BSBadge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
