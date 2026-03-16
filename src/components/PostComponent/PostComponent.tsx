import {type FC} from 'react';
import type {IPosts} from "../../modules/IPosts.ts";
import './PostComponent.css'

type PostComponentType = {
    post:IPosts
}

const PostComponent:FC<PostComponentType> = ({post}) => {
    return (
        <div className='cell'>

            <h3>{post.title}</h3>
            <p>Posts ID:{post.id}</p>
            <p>Posts User ID:{post.userId}</p>
            <p>Post Description:{post.body}</p>

        </div>
    );
};

export default PostComponent;