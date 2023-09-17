import styles from './Site.module.css';
import cn from "classnames";
import Menu from "@/components/Menu/Menu";
import {getMenu} from "@/api/menu";
import {FirstLevelMenu} from "@/interfaces/menu.interface";
import {TopLevelCategory} from "@/interfaces/page.interface";
import Hat from "@/public/icons/graduation.svg";
import Cloud from "@/public/icons/cloud.svg";
import Book from "@/public/icons/comp.svg";
import Box from "@/public/icons/box.svg";
interface Props {
    children:  React.ReactNode
}

export const firstLevelMenu: FirstLevelMenu[] = [
    {route: "courses", title: "Курсы", id: TopLevelCategory.Courser, icon:<Hat/> },
    {route: "services", title: "Сервисы", id: TopLevelCategory.Services, icon: <Cloud/>},
    {route: "books", title: "Книги", id: TopLevelCategory.Books, icon: <Book/>},
    {route: "products", title: "Продукты", id: TopLevelCategory.Products, icon: <Box/>}
];

export default async function SiteLayout({children}: Props) {
    const menu = await getMenu(0);

    return (
        <div className={cn(styles.site)}>
            <Menu firstCategory={0} menu={menu} firstLevelMenu={firstLevelMenu}/>
            {children}
        </div>
    );
}
