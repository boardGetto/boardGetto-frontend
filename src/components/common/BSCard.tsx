import Image from 'next/image';
import GameImage1 from '../../../public/images/gameImage1.png';
import GameImage2 from '../../../public/images/gameImage2.png';
import GameImage3 from '../../../public/images/gameImage3.png';
import GameImage4 from '../../../public/images/gameImage4.png';
import LikeIcon from '../../../public/icons/like-fill.svg';
import NoLikeIcon from '../../../public/icons/like-blank.svg';
import PersonIcon from '../../../public/icons/person.svg';
import BSBadge from './BSBadge';
import BSIcon from './BSIcon';

interface BSCardProps {
  img: string;
  title: string;
  gameName: string;
  isNew: boolean;
  price: number;
  people: string;
  like: boolean;
  account: number;
  address: string;
  time: string;
}

export default function BSCard({
  img,
  title,
  gameName,
  isNew = false,
  price,
  people,
  like,
  account,
  address,
  time,
}: BSCardProps) {
  return (
    <div className="py-3 pt-4 border-b border-nutral-white-03">
      <div className="flex gap-4">
        <Image
          src={img}
          alt={`${gameName} image`}
          priority
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-between">
          <p className="mb-2 text-headBegular-18">{title}</p>
          <div className="flex">
            {isNew && <BSBadge status="isAuth">새제품</BSBadge>}
            <span className="px-2 py-1 rounded-r text-nutral-black-01 text-textRegular-14 bg-caption-subBlue01 w-fit">
              {gameName}
            </span>
          </div>
          <div className="flex justify-between gap-10 mt-3">
            <span className="text-headBold-20">{price}&nbsp;원</span>
            <div className="flex items-center">
              <Image
                src={PersonIcon}
                alt="person icon"
                width={20}
                height={20}
                priority
              />
              <span>{people}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 text-textRegular-14 text-nutral-black-02">
          <BSIcon
            iconUrl={like ? LikeIcon : NoLikeIcon}
            alt="like-icon"
            size={16}
          />
          {account}
        </div>
        <p className="text-captionRegular-12 text-nutral-gray-02">
          {address} <span className="ml-1">{time}</span>
        </p>
      </div>
    </div>
  );
}
