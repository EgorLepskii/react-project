import {ReactNode} from "react";

export interface CardProps {
    header: string,
    description: ReactNode,
    timeToRead: string,
    time: string,
    likes: number,
    tag: string,
    imageLink: string,
    link: string
    className: string
}