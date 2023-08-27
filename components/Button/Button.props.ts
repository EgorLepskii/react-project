import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    appear: 'primary' | 'ghost',
    direction: 'right' | 'down' | 'none'
}