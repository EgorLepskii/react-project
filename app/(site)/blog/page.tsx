import Card from "@/components/Card/Card";
import styles from './Page.module.css';
import cn from "classnames";
import posts from './posts.json';

const Page = () => {

    return (
        <div className={cn(styles.page)}>
            {posts.map((post) => {
                return <Card header={post.header}
                             description={post.description}
                             likes={post.likes}
                             time={post.time}
                             timeToRead={post.timeToRead}
                             tag={post.tag}
                             imageLink={post.imageLink}
                             link={post.link}
                             postId={post.postId}
                />;
            })}
        </div>
    );
};

export default Page;