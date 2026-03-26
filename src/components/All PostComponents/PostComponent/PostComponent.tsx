import type {FC} from "react";
import type {IPost} from "../../../modules/PostsModules/IPosts.ts";
import './PostComponent.css'

type PostComponentType = {
    post: IPost;
}
const PostComponent:FC<PostComponentType> = ({post}) => {
    return (
        <div className='cell'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Likes: {post.reactions.likes}</p>
            <p>Dislikes: {post.reactions.dislikes}</p>
            <p>Tags: </p>
            {post.tags.map((tag,index) => <p key={index}>{tag}</p>)}

        </div>
    );
};

export default PostComponent;