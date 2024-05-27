import BSCard from '@/components/common/BSCard';
import BSHeader from '@/components/common/BSHeader';
import BSMenu from '@/components/common/BSMenu';
import BSNav from '@/components/common/BSNav';
import BSProfile from '@/components/common/BSProfile';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <BSHeader title="마이페이지" isHome />
      <BSProfile name="하마" />
      <div className="flex flex-col gap-4 mt-16">
        <Link href="/mypage/profile">
          <BSNav title="나의 프로필" />
        </Link>

        <BSCard saleCount={100} interestGame={8} />

        <Link href="/mypage/active">
          <BSNav title="게임활동 관리" />
        </Link>
      </div>
      <div>
        <Link href="/logout">
          <BSNav title="로그아웃" />
        </Link>
        <Link href="/notice">
          <BSNav title="공지사항" />
        </Link>
        <Link href="/query">
          <BSNav title="문의 및 피드백" />
        </Link>
      </div>

      <BSMenu />
    </>
  );
}
