import type {IPostDummy} from "../../../../modules/DummyModules/PostsModules/IPostDummy.ts";
import {useEffect, useState} from "react";
import {serviceDummy} from "../../../../services/Dummy_api/Dummy_api.ts";
import PostDummyComponents from "../PostDummyComponents/PostDummyComponents.tsx";

const PostsDummyComponents = () => {

    const [posts,setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {

        serviceDummy.getPosts()
            .then(allPosts => setPosts(allPosts))

    },[])
    return (
        <div className='table'>
            {
                posts.map(post => (<PostDummyComponents key={post.id} post={post} />))
            }
        </div>
    );
};

export default PostsDummyComponents;