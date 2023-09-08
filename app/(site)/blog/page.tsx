import React from 'react';
import Card from "@/components/Card/Card";
import styles from './Page.module.css';
import cn from "classnames";

const Page = () => {
    return (
        <div className={cn(styles.page)}>
            <Card header='Как работать с CSS Grid'
                  description={<><a href='https://google.com'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</>}
                  likes={4}
                  time='3 минуты'
                  timeToRead='1 месяц назад'
                  tag='Front-End'
                  imageLink='/mini.png'
                  link={''}
                  postId={1}

            />
            <Card header='Как работать с CSS Grid'
                  description={<><a href='https://google.com'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</>}
                  likes={4}
                  time='3 минуты'
                  timeToRead='1 месяц назад'
                  tag='Front-End'
                  imageLink='/mini.png'
                  link={''}
                  postId={1}

            />
            <Card header='Как работать с CSS Grid'
                  description={<><a href='https://google.com'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</>}
                  likes={4}
                  time='3 минуты'
                  timeToRead='1 месяц назад'
                  tag='Front-End'
                  imageLink='/mini.png'
                  link={''}
                  id={'test'}
                  postId={1}

            />
            <Card header='Как работать с CSS Grid'
                  description={<><a href='https://google.com'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</>}
                  likes={4}
                  time='3 минуты'
                  timeToRead='1 месяц назад'
                  tag='Front-End'
                  imageLink='/mini.png'
                  link={''}
                  postId={1}

            />
            <Card header='Как работать с CSS Grid'
                  description={<><a href='https://google.com'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</>}
                  likes={4}
                  time='3 минуты'
                  timeToRead='1 месяц назад'
                  tag='Front-End'
                  imageLink='/mini.png'
                  link={''}
                  postId={1}

            />
        </div>
    );
};

export default Page;