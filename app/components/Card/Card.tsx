import styles from './Card.module.css';
import cn from "classnames";
import Likes from "@/components/Likes/Likes";
import {CardProps} from "@/components/Card/Card.props";
import Read from "@/components/Read/Read";
import Image from "next/image";

const Card = ({header, description, timeToRead, time, likes, tag, imageLink, postId, className, ...props}: CardProps) => {
    return (
        <article {...props} className={cn(className, styles.card)}>
            <Image
                src={imageLink}
                alt={'media'}
                layout='responsive'
                width={200} height={300}
                className={styles.media}
            />
            <div className={cn(styles.info)}>
                <div className={cn(styles.info__tag)}>
                    <span className={cn(styles.text)}>{tag}</span>
                    <span className={cn(styles.time)}>{timeToRead}</span>
                </div>
                <Likes count={likes}/>
            </div>
            <div className={cn(styles.header)}>
                <span>{header}</span>
            </div>
            <div className={cn(styles.description)}>
                <p>{description}</p>
            </div>
            <footer className={cn(styles.bottom)}>
                <span className={cn(styles.bottomTime)}>{time}</span>
                <Read text={'Читать'} id={postId}/>
            </footer>
        </article>
    );
};

export default Card;