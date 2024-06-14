import BSBadge from '@/components/common/BSBadge';
import Image from 'next/image';
import BSHeader from '@/components/common/BSHeader';
import Link from 'next/link';
import GameImage1 from '../../../public/images/gameImage1.png';
import GameImage2 from '../../../public/images/gameImage2.png';
import GameImage3 from '../../../public/images/gameImage3.png';
import GameImage4 from '../../../public/images/gameImage4.png';
import LikeIcon from '../../../public/icons/like-fill.svg';
import PersonIcon from '../../../public/icons/person.svg';
import BannerIcon01 from '../../../public/icons/banner-01.svg';
import BannerIcon02 from '../../../public/icons/banner-02.svg';
import NextArrow from '../../../public/icons/next-arrow.svg';
import Character2 from '../../../public/images/character2.png';
import BSIcon from '@/components/common/BSIcon';

export default function Page() {
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

  return (
    <div className="flex flex-col">
      <BSHeader isBack />
      <div className="flex flex-col justify-between my-2 bg-primary-getto50 px-5 py-[6px] rounded">
        <div className="flex items-center py-2.5 justify-evenly">
          <Image
            src={BannerIcon01}
            alt="checkbox black"
            width={50}
            height={50}
            className="mt-8"
          />

          {/* Character2 */}
          <Image src={Character2} alt="Character" width={90} height={90} />
          <Image
            src={BannerIcon02}
            alt="checkbox black"
            width={50}
            height={50}
            className="mb-6"
          />
        </div>
        <Link
          href="/categoryExplain"
          className="flex items-center justify-end gap-1"
        >
          <span className="duration-200 text-primary-getto500 textBold-14 hover:text-primary-getto200">
            게임 카테고리 설명보기
          </span>
          <Image src={NextArrow} alt="checkbox black" width={22} height={22} />
        </Link>
      </div>

      {/* gameList */}
      {gameList.map((item) => (
        // onClick={router.push(`/${game.id}`)}
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
