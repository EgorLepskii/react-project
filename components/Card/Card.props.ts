import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
    header: string,
    description: ReactNode,
    timeToRead: string,
    time: string,
    likes: number,
    tag: string,
    imageLink: string,
    link: string
    postId: number
    className?: string
}