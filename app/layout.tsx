import './globals.css';
import type {Metadata} from 'next';
import {Noto_Sans,} from 'next/font/google';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const notoSans = Noto_Sans({
    weight: ['400', '500', '700'],
    style: ['normal'],
    fallback: ['sans-serif'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
    preload: true,
    variable: '--noto-sans-font'
});

export const metadata: Metadata = {
    title: 'Мой блог'
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className={notoSans.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
