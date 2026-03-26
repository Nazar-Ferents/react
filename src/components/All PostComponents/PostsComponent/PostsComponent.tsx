import {useEffect, useState} from "react";
import type {IPost} from "../../../modules/PostsModules/IPosts.ts";
import {services} from "../../../services/services.tsx";
import PostComponent from "../PostComponent/PostComponent.tsx";
import './PostsComponent.css'

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {

        services.getPosts()
            .then(allPosts => setPosts(allPosts));
    },[])
    return (
        <div className='table'>
            {
                posts.map((post) => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;