import {FirstLevelMenu, PageItem} from "@/interfaces/menu.interface";

export interface MenuProps {
    firstCategory: number,
    menu: PageItem[],
    firstLevelMenu: FirstLevelMenu[]
}