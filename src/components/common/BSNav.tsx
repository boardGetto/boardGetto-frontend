import Image from 'next/image';
import RightArrow from '../../../public/icons/right-arrow.svg';

interface BSNavProps {
  title: string;
}

export default function BSNav({ title = '' }: BSNavProps) {
  return (
    <div className="flex items-center justify-between py-5">
      <p className="text-nutral-black-02 text-textRegular-16">{title}</p>
      <Image
        src={RightArrow}
        alt="right-arrow"
        width={24}
        height={24}
        priority
      />
    </div>
  );
}
