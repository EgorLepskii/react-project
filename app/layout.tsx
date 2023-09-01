import './globals.css';
import type {Metadata} from 'next';
import {Noto_Sans,} from 'next/font/google';
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

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
        {children}
        <Footer/>
        </body>
        </html>
    );
}
