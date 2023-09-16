"use client";
import {SidebarProps} from "@/components/Sidebar/Sidebar.props";
import {FirstLevelMenu, Page} from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import menu from "@/components/Menu/Menu";

const Sidebar = ({data, firstLevelMenu, selectedCategory}: SidebarProps) => {
    const buildFirstLevel = () => {
        return (
            <div className={cn(styles.firstLevelMenu)}>
                {firstLevelMenu.map((menu) => {
                    const isActive = selectedCategory === menu.id;
                    return <div className={cn(styles.firstLevelMenuItem, {[styles.active]: isActive})}>
                        <span>{menu.icon}</span>
                        <span
                            className={cn(styles.menuHeaderText, {[styles.active]: isActive})}>{menu.title}</span>
                        <div>
                            {buildSecondLevel(menu)}
                        </div>
                    </div>;
                })}
            </div>
        );
    };

    const buildSecondLevel = (menu: FirstLevelMenu) => {
        return (
            <div className={cn(styles.secondLevelMenu, {[styles.closed]: selectedCategory !== menu.id})}>
                {data.map((item) => {
                        return <div className={cn(styles.secondLevelMenuItem)}>
                            <span>{item._id.secondCategory}</span>
                            <div
                                className={cn({[styles.closed]: !item.isOpened})}>{buildThirdLevel(item.pages, menu.route)}</div>
                        </div>;
                    }
                )}
            </div>
        );
    };

    const buildThirdLevel = (pages: Page[], route: string) => {
        return (
            <div className={cn(styles.thirdLevelMenu)}>
                {pages.map((page) => {
                    return <a href={`/${route}/${page.alias}`}>{page.title}</a>;
                })}
            </div>
        );
    };


    return (
        <div className={cn(styles.menu)}>
            {buildFirstLevel()}
        </div>
    )
};

export default Sidebar;