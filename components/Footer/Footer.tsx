import React from 'react';
import {FooterProps} from "@/components/Footer/Footer.props";
import styles from './Footer.module.css';

const Footer = ({}: FooterProps) => {
    return (
        <div className={styles.footer}>
            <span className='e1'>OwlTop © 2020 - 2021 Все права защищены</span>
            <a href='#' className='e2'>Пользовательское соглашение</a>
            <a href='#' className='e3'>Политика конфиденциальности</a>
        </div>
    );
};

export default Footer;