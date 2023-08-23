import React from 'react';
import {ButtonProps} from "@/app/components/Button/Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import Arrow from '../../../public/Vector.svg';
const Button = ({children, appear, className, direction = 'none', ...props}: ButtonProps) => {

    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appear === 'primary',
            [styles.ghost]: appear === 'ghost'
        })} {...props}>{children}{direction !== 'none' && <label className={cn(styles.arrow, {
            [styles.right]: direction === 'right',
            [styles.down]: direction === 'down'
        })}><Arrow/></label>}
        </button>
    );
};

export default Button;