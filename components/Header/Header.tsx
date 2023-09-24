'use client';
import {useContext} from 'react';
import {HeaderProps} from "@/components/Header/Header.props";
import styles from './Header.module.css';
import cn from "classnames";
import Icon from '../../public/github.svg';
import {Context} from "@/context/app.context";
import Link from "next/link";

const Header = ({...props}: HeaderProps) => {
    const context = useContext(Context);
    return (
        <div {...props} className={cn(styles.header)}>
            <p>.my_blog</p>
            <Link href={context.link ?? ''}>
                <Icon/>
            </Link>
        </div>
    );
};

export default Header;