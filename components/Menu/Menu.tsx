import {MenuProps} from "@/components/Menu/Menu.props";
import Sidebar from "@/components/Sidebar/Sidebar";



const Menu = async ({firstCategory, menu, firstLevelMenu}: MenuProps) => {
    return (<Sidebar data={menu} firstLevelMenu={firstLevelMenu} selectedCategory={firstCategory}/>);
};

export default Menu;