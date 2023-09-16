import {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode, RefAttributes} from "react";

export interface TagProps extends RefAttributes<HTMLAnchorElement> {
    appear?: 'red' | 'ghost' | 'primary' | 'green',
    children: ReactNode,
    size: 's' | 'm',
    href?: string
}