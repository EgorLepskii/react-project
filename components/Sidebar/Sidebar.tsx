"use client";
import {SidebarProps} from "@/components/Sidebar/Sidebar.props";
import {FirstLevelMenu, Page} from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import {useState} from "react";

const Sidebar = ({data, firstLevelMenu, selectedCategory}: SidebarProps) => {
    const [menu, setMenu] = useState(data);

    const setSecondLevelMenu = (secondCategory: string) => {
        setMenu(menu.map((datum) => {
            if (datum._id.secondCategory === secondCategory) {
                datum.isOpened = !datum.isOpened;
            } else  {
                datum.isOpened = false;
            }
            return datum;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <div className={cn(styles.firstLevelMenu)}>
                {firstLevelMenu.map((menu) => {
                    const isActive = selectedCategory === menu.id;
                    return <div className={cn(styles.firstLevelMenuItem, {[styles.active]: isActive})}>
                        <span>{menu.icon}</span>
                        <Link href={`/${menu.route}`}
                              className={cn(styles.menuHeaderText, {[styles.active]: isActive})}>{menu.title}</Link>
                        <div>
                            {buildSecondLevel(menu)}
                        </div>
                    </div>;
                })}
            </div>
        );
    };

    const buildSecondLevel = (secondMenu: FirstLevelMenu) => {
        return (
            <div className={cn(styles.secondLevelMenu, {[styles.closed]: selectedCategory !== secondMenu.id})}>
                {menu.map((item) => {
                        return <div className={cn(styles.secondLevelMenuItem)}>
                            <span
                                onClick={() => setSecondLevelMenu(item._id.secondCategory)} className={(cn({[styles.active]: item.isOpened}))}>{item._id.secondCategory}</span>
                            <div
                                className={cn({[styles.closed]: !item.isOpened})}>{buildThirdLevel(item.pages, secondMenu.route)}</div>
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
                    return <><Link href={`/${route}/${page.alias}`}>{page.alias}</Link><br/></>;
                })}
            </div>
        );
    };


    return (
        <div className={cn(styles.menu)}>
            {buildFirstLevel()}
        </div>
    );
};

export default Sidebar;