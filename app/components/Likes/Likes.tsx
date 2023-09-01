import React from 'react';
import {LikesProps} from "@/components/Likes/Likes.props";
import styles from './Likes.module.css';
import cn from "classnames";
import Like from '@/public/icons/like.svg';

const Likes = ({count}: LikesProps) => {
    return (
        <div className={cn(styles.likes)}>
            <label>{count}</label>
                <Like/>
        </div>
    );
};

export default Likes;