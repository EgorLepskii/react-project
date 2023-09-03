import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span className='e1'>OwlTop © 2020 - 2021 Все права защищены</span>
            <a href='#' className='e2'>Пользовательское соглашение</a>
            <a href='#' className='e3'>Политика конфиденциальности</a>
        </div>
    );
};

export default Footer;