import React from 'react';
import {ReadProps} from "@/app/components/Read/Read.props";
import ReadArrow from '../../../public/arrow.svg';
import styles from './Read.module.css';

const Read = ({text, link}: ReadProps) => {
    return (
        <a href={link}>
            <div className={styles.read}>
                <p>{text}</p>
                <ReadArrow/>
            </div>
        </a>
    );
};

export default Read;