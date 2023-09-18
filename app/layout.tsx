'use client';
import './globals.css';
import './preflight.css';
import {Noto_Sans,} from 'next/font/google';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {AppContextProvider} from "@/context/app.context";

const notoSans = Noto_Sans({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
    preload: true,
    variable: '--noto-sans-font'
});

interface Props {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <AppContextProvider link={'https://github.com/EgorLepskii/react-project'}>
            <html lang="ru">
            <body className={notoSans.variable}>
            <Header/>
            {children}
            <Footer/>
            </body>
            </html>
        </AppContextProvider>
    );
}
