import './globals.css';
import type { Metadata } from 'next';
import {Noto_Sans,} from 'next/font/google';

const notoSans = Noto_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  fallback: ['sans-serif'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'My Blog'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
