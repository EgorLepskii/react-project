import React from "react";
import styles from './Site.module.css';
import cn from "classnames";
import Menu from "@/components/Menu/Menu";
export default function SiteLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div className={cn(styles.site)}>
            <Menu firstCategory={0}/>
            {children}
        </div>
    );
}
