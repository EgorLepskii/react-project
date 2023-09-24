"use client";
import {SidebarProps} from "@/components/Sidebar/Sidebar.props";
import {Page, PageItem} from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {firstLevelMenu} from "@/helpers/helpers";

const Sidebar = ({data}: SidebarProps) => {
    const [menu, setMenu] = useState(data[0]);
    const [secondLevelMenu, setSecondLevelMenu] = useState<PageItem[] | undefined>(data[0].item);
    const pathname = usePathname();
    const firstLevelPath = pathname.split('/')[1];
    const secondLevelPath = pathname.split('/')[2];

    /**
     * Set second level menu when load page
     */
    useEffect(() => {
        menu.item.forEach((pageItem) => {
            pageItem.pages.forEach((page) => {
                if (page.alias === secondLevelPath) {
                    pageItem.isOpened = true;
                }
            });
        });
        setSecondLevelMenu([...menu.item]);
    }, []);

    /**
     * Set second level menu when click to second level menu id
     *
     * @param secondCategory
     */
    const handleSecondLevelMenu = (secondCategory: string) => {
        const pageItems: PageItem[] = menu.item;
        setSecondLevelMenu(pageItems.map((datum: PageItem) => {
            if (datum._id.secondCategory === secondCategory) {
                datum.isOpened = !datum.isOpened;
            }
            return datum;
        }));
    };

    /**
     * Handle first level menu click
     *
     * @param route
     */
    const handleFirstLevelMenu = (route: string) => {
        const item = data.find((item) => item.route === route);
        if (item) {
            setMenu(item);
            setSecondLevelMenu(item.item);
        }
    };

    const buildFirstLevel = () => {
        return (
            <div className={cn(styles.firstLevelMenu)}>
                {firstLevelMenu.map((first) => {
                    const isActive = firstLevelPath === first.route;
                    return <div>
                        <span>{first.icon}</span>
                        <Link href={`/${first.route}`}
                              className={
                                  cn(styles.menuHeaderText,
                                      {
                                          [styles.active]: isActive
                                      }
                                  )
                              }
                              onClick={() => handleFirstLevelMenu(first.route)}
                        >
                            {first.title}
                        </Link>

                        <div className={cn({[styles.closed]: !isActive})}>
                            {buildSecondLevel()}
                        </div>
                    </div>;
                })}
            </div>
        );
    };

    const buildSecondLevel = () => {
        return (
            <div>
                {secondLevelMenu && secondLevelMenu.map((item) => {
                        return <div>
                            <span
                                onClick={() => handleSecondLevelMenu(item._id.secondCategory)}
                                className={cn({[styles.active]: item.isOpened})}
                            >
                                {item._id.secondCategory}
                            </span>
                            {item.isOpened && buildThirdLevel(item.pages, menu.route)}
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
                    return <>
                        <Link
                            href={`/${route}/${page.alias}`}
                            className={cn(
                                {
                                    [styles.active]: page.alias === secondLevelPath
                                }
                            )
                            }>
                            {page.alias}
                        </Link>
                        <br/>
                    </>;
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