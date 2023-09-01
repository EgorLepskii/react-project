"use client";
import styles from './page.module.css';
import Like from "@/components/Like/Like";
import axios from "axios";
import Card from "@/components/Card/Card";

export default function Home() {

    const sendRequest = () => {
        axios.patch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response.data);
        }).catch((e) => console.log(e));
    };

    return (
        <main className={styles.main}>
            <Card header='Как работать с CSS Grid'
                  description={<><a href='https://google.com'>Грид-раскладка (CSS Grid Layout)</a> представляет собой
                      двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</>}
                  likes={4}
                  time='3 минуты'
                  timeToRead='1 месяц назад'
                  tag='Front-End'
                  imageLink='/mini.png'
                  link={'https://google.com'}

            />
            <Like handleLikeChange={() => sendRequest()}/>
        </main>
    );
}
