import Image from 'next/image';
import SearchIcon from '../../../public/icons/search.svg';
import PlusIcon from '../../../public/icons/plus.svg';
import UserIcon from '../../../public/icons/user.svg';

export default function BSMenu() {
  const menuList = [
    { id: 0, title: '검색하기', src: SearchIcon },
    { id: 1, title: '게임판매', src: PlusIcon },
    { id: 2, title: '마이홈', src: UserIcon },
  ];
  return (
    <ul className="flex  gap-[84px] shadow-2xl rounded-2xl py-[14px] fixed mx-2 mb-11 px-8 z-30 bottom-0">
      {menuList.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center justify-center transition duration-150 cursor-pointer hover:opacity-60"
        >
          <Image src={item.src} alt="menu" priority width={24} height={24} />
          <span className="mt-2 text-nutral-gray-02 text-bodyRegular-14">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
