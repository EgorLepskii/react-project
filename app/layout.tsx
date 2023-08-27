import './globals.css';
import type { Metadata } from 'next';
import {Noto_Sans,} from 'next/font/google';

const notoSans = Noto_Sans({
  variable: '--noto-sans-font',
  weight: ['300', '400', '500', '700'],
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
      <body className={notoSans.className}>
      <div>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </div>
      {children}
      </body>
    </html>
  );
}
