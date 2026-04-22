import type {IPost} from "../../../modules/PostsModules/IPost.ts";
import {useEffect, useState} from "react";
import {serviceJSON} from "../../../services/services.tsx";
import PostComponent from "../PostComponent/PostComponent.tsx";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {

        serviceJSON.getPosts()
            .then(value => setPosts(value))
    },[])
    return (
        <div>
            {
                posts.map(post => (<PostComponent post={post} key={post.id} />))
            }
        </div>
    );
};

export default PostsComponent;