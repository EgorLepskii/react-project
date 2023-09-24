import styles from './layout.module.css';
import cn from "classnames";

interface Props {
    children:  React.ReactNode
}
export default function AuthLayout({children}: Props) {
    return (
        <div className={cn(styles.layout)}>
            <span>site layout</span>
            {children}
        </div>
    );
}
