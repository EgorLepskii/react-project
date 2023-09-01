import React from 'react';
import {PProps} from "@/components/P/P.props";
import cn from "classnames";
import styles from './P.module.css';

const P = ({size = 'm', children, className, ...props}: PProps) => {
    return (
        <p {...props} className={cn(styles.p, className,
            {
                [styles.small]: size === 's',
                [styles.medium]: size === 'm',
                [styles.large]: size === 'l'
            })
        }
        >
            {children}
        </p>
    );
};

export default P;