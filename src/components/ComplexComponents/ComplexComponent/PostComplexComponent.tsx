import type {FC} from "react";
import type {IPost} from "../../../modules/PostsModules/IPost.ts";
import type {IComment} from "../../../modules/CommentsModules/IComment.ts";
import CommentComplexComponent from "./CommentComplexComponent.tsx";

type PostComplexComponentType = {
    post: IPost,
    comments: IComment[],
}
const PostComplexComponent:FC<PostComplexComponentType> = ({post,comments}) => {

    const postComments = comments.filter(comment => (comment.postId === post.id))

    return (
        <div className='card post-card'>
            <h3>Post: </h3>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <h3>Comments: </h3>
            {
                postComments.map(comment => (<CommentComplexComponent key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

export default PostComplexComponent;