import {useEffect, useState} from "react";
import type {IPosts} from "../../../modules/IPosts.ts";
import {getPosts} from "../../../service/service_dummyJSON.ts";
import ComponentPosts from "../ComponentPosts/ComponentPosts.tsx";
import './ComponentsPosts.css'

const ComponentsPosts = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {

        getPosts()
            .then(res => setPosts(res))

    },[])

    return (
        <div>

            <h2>Posts</h2>

            <div className="table">
                {
                    posts.map((post, index) => (<ComponentPosts key={index} post={post} />))
                }
            </div>

        </div>
    );
};

export default ComponentsPosts;