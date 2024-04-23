import Image from 'next/image';
import RightArrow from '../../../public/icons/right-arrow.svg';

interface BSNavProps {
  title: string;
}

export default function BSNav({ title = '' }: BSNavProps) {
  return (
    <div className="flex items-center justify-between py-5 transition duration-200 hover:bg-primary-getto50">
      <p className="cursor-pointer text-nutral-black-02 text-textRegular-16">
        {title}
      </p>
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
