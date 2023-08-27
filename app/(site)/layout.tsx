import React from "react";

export default function SiteLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div style={{border: "1px solid red"}}>
            <p>auth layout</p>
            {children}
        </div>
    );
}
