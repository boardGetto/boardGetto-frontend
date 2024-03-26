import "./globals.css";
import type { Metadata } from "next";
import Favicon from "@/app/favicon.ico";
import Header from "@/components/Header";
import GettoFont from "next/font/local";

const pretendard = GettoFont({
  src: "./../../public/assets/fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "보드겟또",
  description: "보드게임 중고거래 플랫폼",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/favicon/apple-icon", type: "image/png" },
      {
        url: "/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon/apple-icon-precomposed.png",
      },
    ],
  },
  manifest: "/favicon/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
