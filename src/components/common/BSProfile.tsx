import Image from 'next/image';
import MyProfile from '../../../public/icons/myprofile.svg';

interface BSMyProfile {
  image?: string;
  name: string;
}

export default function BSProfile({ image = '', name = '' }: BSMyProfile) {
  return (
    <div className="flex flex-col items-center mt-8">
      {image ? (
        <Image src={image} alt="MyProfile" width={90} height={90} priority />
      ) : (
        <Image src={MyProfile} alt="sampleProfile" width={90} height={90} />
      )}

      <p className="my-2 mt-4 text-textBold-16 text-nutral-black-02">{name}</p>
    </div>
  );
}
