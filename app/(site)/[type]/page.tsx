import React from 'react';
import {firstLevelMenu} from "@/helpers/helpers";


export async function generateStaticParams() {
    const routes: {type: string}[] = [];

    for (const elem of firstLevelMenu) {
        routes.push({type: `${elem.route}`});
    }
    return routes;
}


const Page = ({params}: {params: {type: string}}) => {
    return (
        <div>
            {params.type}
        </div>
    );
};

export default Page;