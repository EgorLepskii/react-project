import {ReadProps} from "@/components/Read/Read.props";
import ReadArrow from '@/public/icons/arrow.svg';
import styles from './Read.module.css';
import Link from "next/link";

const Read = ({text, link}: ReadProps) => {
    return (
        <Link href={link}>
            <div className={styles.read}>
                <p>{text}</p>
                <ReadArrow/>
            </div>
        </Link>
    );
};

export default Read;