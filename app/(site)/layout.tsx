import React from "react";
import Header from "@/components/Header/Header";
import styles from './Site.module.css';
import cn from "classnames";
export default function SiteLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div className={cn(styles.site)}>
            <Header/>
            {children}
        </div>
    );
}
