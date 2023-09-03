import {TagProps} from "@/components/Tag/Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

const Tag = ({appear = 'ghost', size, children, className, href, ...props}: TagProps) => {
    const classes = cn(styles.tag, className,
        {
            [styles.ghost]: appear === 'ghost',
            [styles.red]: appear === 'red',
            [styles.primary]: appear === 'primary',
            [styles.green]: appear === 'green',
            [styles.m]: size === 'm',
            [styles.s]: size === 's',
        });

    return (

        <a
            {...props}
            href={href}
            className={classes}
        >
            {children}
        </a>
    );
};

export default Tag;