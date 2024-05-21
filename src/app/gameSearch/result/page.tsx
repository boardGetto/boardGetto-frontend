import BSBadge from '@/components/common/BSBadge';
import Image from 'next/image';
import ArrowIcon from '../../../../public/icons/right-arrow.svg';
import FilterIcon from '../../../../public/icons/filter.svg';
import GameImage1 from '../../../../public/images/gameImage1.png';
import GameImage2 from '../../../../public/images/gameImage2.png';
import GameImage3 from '../../../../public/images/gameImage3.png';
import GameImage4 from '../../../../public/images/gameImage4.png';
import LikeIcon from '../../../../public/icons/like-fill.svg';
import PersonIcon from '../../../../public/icons/person.svg';
import CheckBoxFill from '../../../../public/icons/checkbox-fill.svg';
import CheckBoxBlank from '../../../../public/icons/checkbox-blank.svg';

export default function Page() {
  const sameGames = [
    { id: 0, title: '게임이름1' },
    { id: 1, title: '게임이름2' },
    { id: 2, title: '게임이름3' },
  ];

  const gameList = [
    {
      id: 0,
      title: '게임이름1',
      img: GameImage1,
      new: 'true',
      price: '150000',
      people: '3~5',
      like: true,
      account: 1,
      address: '강남구 압구정동',
      time: '3시간 전',
      tag: ['전략', '테마', '전쟁'],
    },
    {
      id: 1,
      title: '게임이름2',
      img: GameImage2,
      new: 'true',
      price: '150000',
      people: '1~2',
      like: true,
      account: 14,
      address: '강남구 압구정동',
      time: '3시간 전',
      tag: ['전략', '테마', '전쟁'],
    },
    {
      id: 2,
      title: '게임이름1',
      img: GameImage3,
      new: 'true',
      price: '150000',
      people: '3~5',
      like: true,
      account: 22,
      address: '강남구 압구정동',
      time: '3시간 전',
      tag: ['전략', '테마', '전쟁'],
    },
    {
      id: 3,
      title: '게임이름1',
      img: GameImage4,
      new: 'true',
      price: '150000',
      people: '3~5',
      like: true,
      account: 22,
      address: '강남구 압구정동',
      time: '3시간 전',
      tag: ['전략', '테마', '전쟁'],
    },
  ];

  const textCss = 'text-textRegular-14 text-nutral-black-02';

  return (
    <div className="flex flex-col">
      <div className="flex items-center py-[14px]">
        <h1 className="text-primary-getto500 text-textBold-14 mr-[14px]">
          연관검색
        </h1>
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
          <p className={textCss}>최신순</p>
          <Image
            src={ArrowIcon}
            alt="order arrow icon"
            width={24}
            height={24}
            priority
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <p className={textCss}>필터</p>
          <Image
            src={FilterIcon}
            alt="filter icon"
            width={24}
            height={24}
            priority
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <Image
            src={CheckBoxFill}
            alt="checkbox icon"
            width={24}
            height={24}
            priority
          />
          <Image
            src={CheckBoxBlank}
            alt="checkbox icon"
            width={24}
            height={24}
            priority
          />
          <p>새 제품만 보기</p>
        </div>
      </div>
      {/* option end */}

      {/* gameList */}
      {gameList.map((item) => (
        <div className="py-3 pt-4 border-b border-nutral-white-03">
          <div className="flex gap-4">
            <Image src={GameImage1} alt="order arrow icon" priority />
            <div className="flex flex-col justify-between">
              <p>{item.title}</p>
              {item.new && <BSBadge status="isAuth">새제품</BSBadge>}
              <div className="flex justify-between mt-5">
                <span>{item.price}&nbsp;원</span>
                <div className="flex items-center">
                  <Image
                    src={PersonIcon}
                    alt="person icon"
                    width={20}
                    height={20}
                    priority
                  />
                  <span>{item.people}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-textRegular-14 text-nutral-black-02">
              <Image
                src={LikeIcon}
                alt="order arrow icon"
                width={16}
                height={16}
                priority
              />
              {item.account}
            </div>

            <p className="text-captionRegular-12 text-nutral-gray-02">
              {item.address}
              <span>{item.time}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
