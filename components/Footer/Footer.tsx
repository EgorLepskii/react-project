import styles from './Footer.module.css';
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span className='e1'>OwlTop © 2020 - 2021 Все права защищены</span>
            <Link href='#' className='e2'>Пользовательское соглашение</Link>
            <Link href='#' className='e3'>Политика конфиденциальности</Link>
        </div>
    );
};

export default Footer;