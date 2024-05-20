'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RightArrow from '../../public/icons/right-arrow.svg';

interface HeaderProps {
  title?: string;
}

export default function BSNav({ title = '' }: HeaderProps) {
  const router = useRouter();

  const handleBackBtn = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between py-2">
      <Image
        src={RightArrow}
        alt="right-arrow"
        width={24}
        height={24}
        priority
        className="rotate-180 cursor-pointer"
        onClick={handleBackBtn}
      />
      <p className="cursor-pointer text-nutral-gray-03 text-textRegular-14">
        {title}
      </p>
    </div>
  );
}
