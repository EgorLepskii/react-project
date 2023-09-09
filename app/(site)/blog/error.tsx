"use client";
import React from 'react';

const Error = ({
                   error,
                   reset,
               }: {
    error: Error
    reset: () => void
}) => {
    return (
        <div>
            {JSON.stringify(error)}
            <button onClick={() => reset()}>reset</button>
        </div>
    );
};

export default Error;