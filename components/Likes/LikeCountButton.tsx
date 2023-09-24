import {LikesProps} from "@/components/Likes/Likes.props";
import styles from './Likes.module.css';
import cn from "classnames";
import LikeIcon from '@/public/icons/like.svg';

const LikeCountButton = ({count}: LikesProps) => {
    return (
        <button className={cn(styles.likes)}>
            <span>{count}</span>
            <LikeIcon/>
        </button>
    );
};

export default LikeCountButton;