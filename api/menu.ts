import {PageItem} from "@/interfaces/menu.interface";
import {API} from "@/app/api";

export async function getMenu(firstCategory: number): Promise<PageItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',mode: 'no-cors',
        body: JSON.stringify({
            firstCategory
        }),
        headers: {'Content-type': 'application/json'}
    });
    return res.json();
}