import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    appear?: 'red' | 'ghost' | 'primary' | 'green',
    children: ReactNode,
    size: 's' | 'm',
    href?: string
}