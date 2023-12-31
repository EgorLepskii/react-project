import {ReadProps} from "@/components/Read/Read.props";
import ReadArrow from '@/public/icons/arrow.svg';
import styles from './Read.module.css';
import Link from "next/link";

const Read = ({text, id}: ReadProps) => {
    return (
        <Link href={`https://jsonplaceholder.typicode.com/posts/${id}`} className={styles.read}>
            <span>{text}</span>
            <ReadArrow/>
        </Link>
    );
};

export default Read;