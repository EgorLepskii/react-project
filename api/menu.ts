import {PageItem} from "@/interfaces/menu.interface";
import {API} from "@/app/api";

export async function getMenu(firstCategory: number): Promise<PageItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory
        }),
        headers: new Headers({'content-type': 'application/json'})
    });
    console.log("get menu");
    return res.json();
}