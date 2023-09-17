import React from 'react';
import {firstLevelMenu} from "@/app/(site)/layout";


export async function generateStaticParams() {
    return firstLevelMenu.map((elem) => elem.route);
}

const Page = ({params}: {params: {alias: string}}) => {
    return (
        <div>
            {params.alias}
        </div>
    );
};

export default Page;