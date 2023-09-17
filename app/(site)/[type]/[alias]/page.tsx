import React from 'react';
import {getMenu} from "@/api/menu";
import {firstLevelMenu} from "@/helpers/helpers";



export async function generateStaticParams() {
    const routes: {alias: string, type: string}[] = [];

    for (const elem of firstLevelMenu) {
        const data = await getMenu(elem.id);
        data.forEach((datum) => {
            datum.pages.forEach((page) => {
                routes.push({alias: `${page.alias}`, type: `${elem.route}`});
            });
        });
    }
    return routes;
}

const Page = ({params}: {params: {alias: string, type: string}}) => {
    return (
        <div>
            {params.type} {params.alias}
        </div>
    );
};

export default Page;