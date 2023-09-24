import {API} from "@/app/api";
import {Post} from "@/interfaces/Post.interface";

export const getPosts = async ():Promise<Post[] | null> => {
    const posts = await fetch(API.posts.all, {next: {revalidate: 10}});

    if (!posts.ok) {
        return null;
    }
    return posts.json();
}