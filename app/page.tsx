import styles from './page.module.css';
import Like from "@/components/Like/Like";

export default function Home() {
    return (
        <main className={styles.main}>
            <Like/>
        </main>
    );
}
