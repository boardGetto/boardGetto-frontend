import Image from 'next/image';
import Character2 from '../../../public/icons/banner-01.svg';

export default function BSImageSkeleton() {
  return (
    <div>
      <Image src={Character2} alt="Character" width={60} height={60} />
    </div>
  );
}
