import React from 'react';
import {TagProps} from "@/components/Tag/Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

const Tag = ({appear = 'ghost', size, children, className, href, ...props}: TagProps) => {
    return (

        <a
            {...props}
            href={href}
            className={cn(styles.tag, className,
                {
                    [styles.ghost]: appear === 'ghost',
                    [styles.red]: appear === 'red',
                    [styles.primary]: appear === 'primary',
                    [styles.green]: appear === 'green',
                    [styles.m]: size === 'm',
                    [styles.s]: size === 's',
                })}
        >
            {children}
        </a>
    );
};

export default Tag;