import styles from './page.module.css';
import LikeCountButton from "@/components/Likes/LikeCountButton";

export default function Home() {
    return (
        <main className={styles.main}>
            <LikeCountButton count={4}/>
        </main>
    );
}
