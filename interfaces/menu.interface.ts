import {TopLevelCategory} from "@/interfaces/page.interface";

export interface PageItem {
    _id: {
        secondCategory: string
    }
    pages: Page[],
    isOpened?: boolean
}

export interface Page {
    alias: string
    title: string
    _id: string
    category: string
}

export interface FirstLevelMenu {
    route: string,
    title: string,
    id:TopLevelCategory,
    icon: JSX.Element
}