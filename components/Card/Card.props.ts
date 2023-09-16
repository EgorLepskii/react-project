import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
    header: string,
    description: string,
    timeToRead: string,
    time: string,
    likes: number,
    tag: string,
    imageLink: string,
    postId: number
    className?: string
}