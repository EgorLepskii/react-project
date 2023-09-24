import {FirstLevelMenu} from "@/interfaces/menu.interface";
import {TopLevelCategory} from "@/interfaces/page.interface";
import Hat from "@/public/icons/graduation.svg";
import Cloud from "@/public/icons/cloud.svg";
import Book from "@/public/icons/comp.svg";
import Box from "@/public/icons/box.svg";

export const firstLevelMenu: FirstLevelMenu[] = [
    {route: "courses", title: "Курсы", id: TopLevelCategory.Courser, icon: <Hat/> },
    {route: "services", title: "Сервисы", id: TopLevelCategory.Services, icon: <Cloud/>},
    {route: "books", title: "Книги", id: TopLevelCategory.Books, icon: <Book/>},
    {route: "products", title: "Продукты", id: TopLevelCategory.Products, icon: <Box/>}
];