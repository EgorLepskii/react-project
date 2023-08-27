import React from "react";

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div style={{border: "1px solid red"}}>
            <p>site layout</p>
            {children}
        </div>
    );
}
