import Sidebar from "@/components/Sidebar/Sidebar";
import {getMenu} from "@/api/menu";
import {PageItem} from "@/interfaces/menu.interface";
import {firstLevelMenu} from "@/helpers/helpers";

export interface FirstLevelMenuData {
    route: string,
    item: PageItem[]
}


const Menu = async () => {
    const menu:FirstLevelMenuData[] = [];
    for (const item of firstLevelMenu) {
       menu.push({route: item.route, item: await getMenu(item.id)});
    }

    return (<Sidebar data={menu}/>);
};

export default Menu;