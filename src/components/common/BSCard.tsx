import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GameDetailType, fetchGameDetail } from '@/Service/gameService';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

import LikeIcon from '../../../public/icons/like-fill.svg';
import NoLikeIcon from '../../../public/icons/like-blank.svg';
import PersonIcon from '../../../public/icons/person.svg';
import BSBadge from './BSBadge';
import BSIcon from './BSIcon';
import BSImageSkeleton from './BSImageSkeleton';

interface BSCardProps {
  title?: string;
  gameName?: string;
  isNew?: boolean;
  price?: number;
  people?: string;
  like?: boolean;
  account?: number;
  address?: string;
  time?: string;
}

export default function BSCard({
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
  const router = useRouter();
  const [games, setGames] = useState<GameDetailType | null>(null);

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const handleClick = () => {
    router.push(`/detail/${gameName}`);
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    (async () => {
      const detail = await fetchGameDetail(gameName);
      setGames(detail);
    })();
  }, [gameName, isVisible]);

  if (!games) {
    return (
      <div className="py-3 pt-4 border-b border-nutral-white-03" ref={ref}>
        <BSImageSkeleton />;
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="py-3 pt-4 border-b border-nutral-white-03"
      ref={ref}
    >
      <div className="flex gap-4">
        <Image
          src={games.images.dreamWorldFront}
          alt={`${games} image`}
          priority
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-between">
          <p className="mb-2 text-textRegular-16">{title}</p>
          <div className="flex">
            {isNew && <BSBadge status="isAuth">새제품</BSBadge>}
            <span className="px-2 py-1 rounded-r text-nutral-black-01 text-textRegular-14 bg-caption-subBlue01 w-fit">
              {gameName}
            </span>
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-headBold-18">{price}&nbsp;원</span>
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
    </button>
  );
}
