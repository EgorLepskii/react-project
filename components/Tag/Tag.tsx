import {TagProps} from "@/components/Tag/Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";
import Link from "next/link";

const Tag = ({appear = 'ghost', size, children, href, ...props}: TagProps) => {
    const classes = cn(styles.tag,
        {
            [styles.ghost]: appear === 'ghost',
            [styles.red]: appear === 'red',
            [styles.primary]: appear === 'primary',
            [styles.green]: appear === 'green',
            [styles.m]: size === 'm',
            [styles.s]: size === 's',
        });

    return (

        <Link
            {...props}
            href={href ?? ''}
            className={classes}
        >
            {children}
        </Link>
    );
};

export default Tag;