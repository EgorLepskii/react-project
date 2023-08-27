import React from 'react';
import {ReadProps} from "@/components/Read/Read.props";
import ReadArrow from '../../public/arrow.svg';
import styles from './Read.module.css';

const Read = ({text} : ReadProps) => {
    return (
        <div className={styles.read}>
            <p>{text}</p>
            <ReadArrow/>
        </div>
    );
};

export default Read;