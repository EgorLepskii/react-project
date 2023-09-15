import styles from './Button.module.css';
import cn from 'classnames';
import {ButtonProps} from "@/components/Button/Button.props";

const Button = ({children, className, iconStyles, icon, ...props}: ButtonProps) => {
    return (
        <button
            {...props}
            className={cn(className, styles.button)}
        >
            <span className={styles.text}>{children}</span>
            <span className={cn(styles.icon, iconStyles)}>{icon}</span>
        </button>
    );
};

export default Button;