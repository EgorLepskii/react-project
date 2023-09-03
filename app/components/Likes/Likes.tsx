import {LikesProps} from "@/components/Likes/Likes.props";
import styles from './Likes.module.css';
import cn from "classnames";
import Like from '@/public/icons/like.svg';

const Likes = ({count}: LikesProps) => {
    return (
        <button className={cn(styles.likes)}>
            <span>{count}</span>
            <Like/>
        </button>
    );
};

export default Likes;