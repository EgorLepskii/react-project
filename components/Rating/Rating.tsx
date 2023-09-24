"use client";
import {useEffect, useState} from 'react';
import {RatingProps} from "@/components/Rating/Rating.props";
import StarIcon from '@/public/icons/star.svg';
import cn from "classnames";
import styles from './Rating.module.css';

const Rating = ({rating, isEditable, setRating, className, ...props}: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const newArr = ratingArray.map((e, index) => {
            return <button
                key={index}
                className={
                    cn(
                        className,
                        {
                            [styles.active]: index < currentRating
                        }
                    )
                }
                onMouseEnter={
                    () => {
                        constructRating(index + 1);
                    }
                }
                onMouseLeave={
                    () => {
                        if (isEditable) {
                            constructRating(rating);
                        }
                    }
                }
                onClick={() => onClick(index)}

                disabled={!isEditable}
            >
                <StarIcon/>
            </button>;
        });
        setRatingArray(newArr);
    };

    const onClick = (i: number) => {
        if (setRating) {
            setRating(i + 1);
        }
    };

    return (
        <div {...props} className={cn(className, {[styles.rating]: true})}>
            {ratingArray.map((e) => e)}
        </div>
    );
};

export default Rating;