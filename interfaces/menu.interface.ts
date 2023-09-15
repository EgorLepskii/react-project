export interface PageItem {
    _id: {
        secondCategory: string
    }
    pages: Page[]
}

export interface Page {
    alias: string
    title: string
    _id: string
    category: string
}