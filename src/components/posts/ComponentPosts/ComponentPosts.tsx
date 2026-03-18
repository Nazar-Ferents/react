import type {IPosts} from "../../../modules/IPosts.ts";
import type {FC} from "react";
import './ComponentPosts.css'


type ComponentPostsType = {
    post:IPosts
}

const ComponentPosts:FC<ComponentPostsType> = ({post}) => {
    return (
        <div className='cell'>

            <h3>{post.title}</h3>
            <p>ID: {post.id}</p>
            <p>{post.body}</p>
            {post.tags.map((tag,index) => <p className='tags' key={index}>Tag: {tag}</p> )}
            <p>Views: {post.views}</p>

        </div>
    );
};

export default ComponentPosts;