import {useState} from 'react';
import LikeIcon from '../../public/shape.svg';
import styles from './Like.module.css';
import {LikeProps} from "@/components/Like/Like.props";
import cn from "classnames";

const Like = ({handleLikeChange}: LikeProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={cn(styles.like, {[styles.active]: active, [styles.notActive]: !active})}
             onClick={() => {
                 setActive(!active);
                 if (handleLikeChange)
                     handleLikeChange();
             }}>
            <LikeIcon/>
        </div>
    );
};

export default Like;