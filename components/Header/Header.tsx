'use client';
import React, {useContext} from 'react';
import {HeaderProps} from "@/components/Header/Header.props";
import styles from './Header.module.css';
import cn from "classnames";
import Icon from '../../public/github.svg';
import {Context} from "@/context/app.context";

const Header = ({...props}: HeaderProps) => {
    const context = useContext(Context);
    return (
        <div {...props} className={cn(styles.header)}>
            <p>.my_blog</p>
            <a href={context.link}>
                <Icon/>
            </a>
        </div>
    );
};

export default Header;