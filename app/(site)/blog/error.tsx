"use client";

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