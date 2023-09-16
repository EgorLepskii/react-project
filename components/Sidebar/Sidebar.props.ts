import {FirstLevelMenu, PageItem} from "@/interfaces/menu.interface";

export interface SidebarProps {
    data: PageItem[],
    firstLevelMenu: FirstLevelMenu[],
    selectedCategory: number
}