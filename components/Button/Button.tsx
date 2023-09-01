import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import {ButtonProps} from "@/components/Button/Button.props";

const Button = ({children, appear, className, direction = 'none',icon, ...props}: ButtonProps) => {
    const buttonClasses = cn(styles.button, className, {
        [styles.primary]: appear === 'primary',
        [styles.ghost]: appear === 'ghost'
    });

    const labelClasses = cn(styles.arrow, {
        [styles.right]: direction === 'right',
        [styles.down]: direction === 'down'
    });

    return (
        <button
            {...props}
            className={buttonClasses}
        >
            {children}
            {
                direction !== 'none' &&
                <label
                    className={labelClasses}
                >
                    {icon}
                </label>
            }
        </button>
    );
};

export default Button;