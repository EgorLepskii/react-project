import styles from './page.module.css';
import Button from "@/app/components/Button/Button";
import P from "@/app/components/P/P";
import Tag from "@/app/components/Tag/Tag";
import Card from "@/app/components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
          <Card header={'Как работать с CSS Grid'}
                description={<p><a href={'https://google.com'}>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</p>}
                likes={4}
                time={'3 минуты'}
                timeToRead={'1 месяц назад'}
                tag={'Front-End'}
                imageLink={'/mini.png'}

          />
        <Button appear={'ghost'} direction={'right'}>Читать отзывы</Button>
        <Button appear={'primary'} direction={'right'}>Читать отзывы</Button>
        <Button appear={'ghost'} direction={'down'}>Читать отзывы</Button>
        <Button appear={'primary'} direction={'down'}>Читать отзывы</Button>
        <P size={'m'}>test</P>
        <P size={'l'}>test</P>
        <P size={'s'}>test</P>
        <Tag appear={'green'} size={'s'}>10000</Tag>
        <Tag appear={'ghost'} size={'s'}>10</Tag>
        <Tag appear={'red'} size={'s'}>hh.ru</Tag>
        <Tag appear={'primary'} size={'s'}>Подготовка макетов</Tag>
        <Tag appear={'green'} size={'m'}>10000</Tag>
        <Tag appear={'ghost'} size={'m'}>10</Tag>
        <Tag appear={'red'} size={'m'}>hh.ru</Tag>
        <Tag appear={'primary'} size={'m'}>Подготовка макетов</Tag>
        <Tag appear={'primary'} size={'m'} href={'https://google.com'}>Подготовка макетов</Tag>
    </main>
  );
}
