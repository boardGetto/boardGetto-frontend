import Image from 'next/image';
// import variables from '@/styles/variables.module.scss';
import Link from 'next/link';
// import homeMain from '../../public/icons/home-main.svg';
import SearchIcon from '../../public/icons/search.svg';
import BSTooltip from './common/BSTooltip';
import MainImg from '../../public/images/main.png';

export default function Main() {
  return (
    <div className="flex flex-col items-center mt-[130px]">
      <Image
        src={MainImg}
        width={400}
        height={400}
        alt="sample-image"
        priority
      />
      <h1 className="bodyRegular-16 mt-2.5">보드게임 중고거래 플랫폼</h1>
      {/* <h1 className={variables.title}>Sass 적용 테스트</h1> */}

      <BSTooltip position="top" content="testtest">
        tt
      </BSTooltip>
      <Link href="/home">
        <div className="gap-2 mt-[55px] py-2.5 px-[50px] border border-nutral-white-03 rounded-lg flex items-center justify-center">
          <Image
            src={SearchIcon}
            alt="SearchIcon"
            width={24}
            height={24}
            priority
          />
          <span className="text-bodyRegular-14 text-nutral-gray-01">
            어떤 게임을 해볼까요?
          </span>
        </div>
      </Link>
    </div>
  );
}
