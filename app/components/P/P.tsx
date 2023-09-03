import {PProps} from "@/components/P/P.props";
import cn from "classnames";
import styles from './P.module.css';

const P = ({size = 'm', children, className, ...props}: PProps) => {
    const pClasses = cn(styles.p, className,
        {
            [styles.small]: size === 's',
            [styles.medium]: size === 'm',
            [styles.large]: size === 'l'
        });

    return (
        <p {...props}
           className={pClasses}
        >
            {children}
        </p>
    );
};

export default P;