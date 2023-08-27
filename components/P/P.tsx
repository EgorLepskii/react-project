import React from 'react';
import {PProps} from "@/components/P/P.props";
import cn from "classnames";
import stypes from './P.module.css';

const P = ({size = 'm', children, className, ...props}: PProps) => {
    return (
        <p className={cn(stypes.p,className, {[stypes.small]: size === 's', [stypes.medium]: size === 'm', [stypes.large]: size === 'l'})} {...props}>{children}</p>
    );
};

export default P;