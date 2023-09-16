import {API} from "@/app/api";
import {FirstLevelMenu, PageItem} from "@/interfaces/menu.interface";
import {MenuProps} from "@/components/Menu/Menu.props";
import Sidebar from "@/components/Sidebar/Sidebar";
import {TopLevelCategory} from "@/interfaces/page.interface";
import Hat from "@/public/icons/graduation.svg";
import Cloud from "@/public/icons/cloud.svg";
import Book from "@/public/icons/comp.svg";
import Box from "@/public/icons/box.svg";


const firstLevelMenu: FirstLevelMenu[] = [
    {route: "courses", title: "Курсы", id: TopLevelCategory.Courser, icon:<Hat/> },
    {route: "services", title: "Сервисы", id: TopLevelCategory.Services, icon: <Cloud/>},
    {route: "books", title: "Книги", id: TopLevelCategory.Books, icon: <Book/>},
    {route: "products", title: "Продукты", id: TopLevelCategory.Products, icon: <Box/>}
];

async function getMenu(firstCategory: number): Promise<PageItem[]> {
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

const Menu = async ({firstCategory}: MenuProps) => {
    const menu = await getMenu(firstCategory);
    return (<Sidebar data={menu} firstLevelMenu={firstLevelMenu} selectedCategory={firstCategory}/>);
};

export default Menu;