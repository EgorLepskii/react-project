"use client";
import React, {useEffect, useState} from 'react';
import {RatingProps} from "@/components/Rating/Rating.props";
import StarIcon from '../../public/star.svg';
import cn from "classnames";
import styles from './Rating.module.css';

const Rating = ({rating, isEditable, setRating, className, ...props}: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));


    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating: number) => {
        const newArr = ratingArray.map((e, index) => {
            return <StarIcon key={index} className={cn(className, {
                [styles.active]: index < currentRating
            })} onMouseEnter={() => {
                if (isEditable) {
                    constructRating(index + 1);
                }
            }} onMouseLeave={() => {
                constructRating(rating);
            }} onClick={() => onClick(index)}
                             tabIndex={isEditable ? 0 : -1}
                             onKeyDown={(e: KeyboardEvent) => {
                                 onKeyDown(index, e);
                             }}
            />
        });
        setRatingArray(newArr);
    }

    const onClick = (i: number) => {
        if (isEditable && setRating) {
            setRating(i + 1);
        }
    }

    const onKeyDown = (i: number, e: KeyboardEvent) => {
        console.log(e);
        if (isEditable && setRating && e.code === 'Space') {
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