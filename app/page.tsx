"use client";
import styles from './page.module.css';
import Like from "@/app/components/Like/Like";
import axios from "axios";

export default function Home() {

    const sendRequest = () => {
        axios.patch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response.data);
        }).catch((e) => console.log(e));
    };

    return (
        <main className={styles.main}>
            <Like handleLikeChange={() => sendRequest()}/>
        </main>
    );
}
