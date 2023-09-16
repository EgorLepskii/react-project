import styles from './Site.module.css';
import cn from "classnames";
import Menu from "@/components/Menu/Menu";
interface Props {
    children:  React.ReactNode
}
export default function SiteLayout({children}: Props) {
    return (
        <div className={cn(styles.site)}>
            <Menu firstCategory={0}/>
            {children}
        </div>
    );
}
