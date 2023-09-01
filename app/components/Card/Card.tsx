import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";
import Likes from "@/components/Likes/Likes";
import {CardProps} from "@/components/Card/Card.props";
import Read from "@/components/Read/Read";
import Image from "next/image";

const Card = ({header, description, timeToRead, time, likes, tag, imageLink, link}: CardProps) => {
    return (
        <article className={cn(styles.card)}>
            <div className={cn(styles.media)}>
                <Image
                    src={imageLink}
                    alt={'media'}
                    fill={true}
                />
            </div>
            <div className={cn(styles.info)}>
                <div className={cn(styles.info__tag)}>
                    <p className={cn(styles.text)}>{tag}</p>
                    <ul className={cn(styles.time)}>
                        <li>{timeToRead}</li>
                    </ul>
                </div>
                <Likes count={likes}/>
            </div>
            <div className={cn(styles.header)}>
                <p>{header}</p>
            </div>
            <div className={cn(styles.description)}>
                <p>{description}</p>
            </div>
            <footer className={cn(styles.bottom)}>
                <p className={cn(styles.bottomTime)}>{time}</p>
                <Read text={'Читать'} link={link}/>
            </footer>
        </article>
    );
};

export default Card;