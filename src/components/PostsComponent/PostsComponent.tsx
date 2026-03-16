import type {IPosts} from "../../modules/IPosts.ts";
import {getPost} from "../../services/service_post.ts";
import {useEffect, useState} from "react";
import PostComponent from "../PostComponent/PostComponent.tsx";
import './PostsComponent.css'


const PostsComponent = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {

        getPost()
            .then(json => setPosts(json));

    },[])

    return (
        <div className='table'>

            {
                posts.map((post,index) => (<PostComponent post={post} key={index} />))
            }

        </div>
    );
};

export default PostsComponent;