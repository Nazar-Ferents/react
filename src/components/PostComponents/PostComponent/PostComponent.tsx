import type {FC} from "react";
import type {IPost} from "../../../modules/PostsModules/IPost.ts";

type PostComponentType = {
    post: IPost
}
const PostComponent:FC<PostComponentType> = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;