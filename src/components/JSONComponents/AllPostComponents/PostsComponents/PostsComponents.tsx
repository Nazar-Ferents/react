import type {IPostJSON} from "../../../../modules/JSONModules/PostsModules/IPostJSON.ts";
import {useEffect, useState} from "react";
import {serviceJSON} from "../../../../services/JSON_api/JSON_api.ts";
import PostComponents from "../PostComponents/PostComponents.tsx";

const PostsComponents = () => {

    const [posts, setPosts] = useState<IPostJSON[]>([]);

    useEffect(() => {

        serviceJSON.getPosts()
            .then(allPosts => setPosts(allPosts))

    },[])
    return (
        <div className='Table'>
            {
                posts.map((post) => (<PostComponents key={post.id} post={post} />))
            }
        </div>
    );
};

export default PostsComponents;