"use client";
import {useState} from 'react';
import LikeIcon from '../../public/shape.svg';
import styles from './Like.module.css';
import cn from "classnames";
import axios from "axios";

const Like = () => {
    const [active, setActive] = useState<boolean>(false);
    const sendRequest = () => {
        axios.patch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response.data);
        }).catch((e) => console.log(e));
    };

    return (
        <div className={cn(styles.like, {[styles.active]: active, [styles.notActive]: !active})}
             onClick={() => {
                 setActive(!active);
                 sendRequest();
             }}>
            <LikeIcon/>
        </div>
    );
};

export default Like;