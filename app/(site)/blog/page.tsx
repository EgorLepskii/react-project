import Card from "@/components/Card/Card";
import styles from './Page.module.css';
import cn from "classnames";
import {getPosts} from "@/api/post";
import {notFound} from "next/navigation";

const Page = async () => {
    const posts = await getPosts();

    if (!posts) {
        notFound();
    }

    return (
        <div className={cn(styles.page)}>
            {posts.map((post) => {
                return <Card header={post.title}
                             description={post.body}
                             likes={4}
                             time='3 минуты'
                             timeToRead='1 месяц назад'
                             tag='Front-End'
                             imageLink='/icons/mini.png'
                             postId={post.id}/>;
            })
            }
        </div>
    )
}

export default Page;