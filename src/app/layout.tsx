import './globals.css';
import type { Metadata } from 'next';
import GettoFont from 'next/font/local';
import Image from 'next/image';
import layoutTitle from '../../public/images/layout-title.png';
import mainPhone from '../../public/images/main-phone.png';
import eyes from '../../public/icons/eyes.svg';

const pretendard = GettoFont({
  src: './../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '보드겟또',
  description: '보드게임 중고거래 플랫폼',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      {
        url: '/favicon/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        url: '/favicon/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: '/favicon/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        url: '/favicon/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/favicon/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/favicon/apple-icon', type: 'image/png' },
      {
        url: '/favicon/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon/apple-icon-precomposed.png',
      },
    ],
  },
  manifest: '/favicon/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="flex justify-center gap-28 bg-gradient-to-l from-primary-getto250 bg-primary-getto350">
        <main className="h-screen w-[414px] bg-nutral-white-01 overflow-y-auto shadow-2xl px-4">
          {children}
        </main>
        <section className=" flex flex-col w-[580px] justify-end gap-11">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-1.5 items-center mb-2.5">
              <h1 className="text-nutral-white-01 text-textRegular-16">
                보드게임 중고거래 플랫폼
              </h1>
              <Image
                src={eyes}
                alt="sample-image"
                width={40}
                height={40}
                priority
              />
            </div>
            <Image
              src={layoutTitle}
              alt="sample-image"
              priority
              className="mt-1 mb-4"
            />
            <Image src={mainPhone} alt="sample-image" priority />
          </div>
          <p className="my-4 text-center text-nutral-white-01">
            보드살롱 깃허브솔 문의 : thfdl0317@naver.com
          </p>
        </section>
      </body>
    </html>
  );
}
