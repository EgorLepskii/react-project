import styles from './layout.module.css';
import cn from "classnames";

export default function AuthLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={cn(styles.layout)}>
            <p>site layout</p>
            {children}
        </div>
    );
}
