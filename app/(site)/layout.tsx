import React from "react";
import styles from './Site.module.css';
import cn from "classnames";
interface Props {
    children:  React.ReactNode
}
export default function SiteLayout({children}: Props) {
    return (
        <div className={cn(styles.site)}>
            {children}
        </div>
    );
}
