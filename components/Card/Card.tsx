import styles from './Card.module.css';
import cn from "classnames";
import LikeCountButton from "@/components/Likes/LikeCountButton";
import {CardProps} from "@/components/Card/Card.props";
import Read from "@/components/Read/Read";
import Image from "next/image";
import DOMPurify from 'isomorphic-dompurify';


const Card = ({
                  header,
                  description,
                  timeToRead,
                  time,
                  likes,
                  tag,
                  imageLink,
                  postId,
                  className,
                  ...props
              }: CardProps) => {
    const clean = DOMPurify.sanitize(description, {
        ALLOWED_TAGS: ['a']
    });

    return (
        <article {...props} className={cn(className, styles.card)}>
            <div className={styles.media}>
                <Image
                    src={imageLink}
                    alt='media'
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div className={cn(styles.info)}>
                <div className={cn(styles.info__tag)}>
                    <span className={cn(styles.text)}>{tag}</span>
                    <span className={cn(styles.time)}>{timeToRead}</span>
                </div>
                <LikeCountButton count={likes}/>
            </div>
            <div className={cn(styles.header)}>
                <span>{header}</span>
            </div>
            <div className={cn(styles.description)}>
                <p dangerouslySetInnerHTML={{__html: clean}}/>
            </div>
            <footer className={cn(styles.bottom)}>
                <span className={cn(styles.bottomTime)}>{time}</span>
                <Read text='Читать' id={postId}/>
            </footer>
        </article>
    );
};

export default Card;