import {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    appear?: 'red' | 'ghost' | 'primary' | 'green',
    children: ReactNode,
    size: 's' | 'm',
    href?: string
}