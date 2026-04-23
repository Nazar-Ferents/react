import type {FC} from "react";
import type {IComment} from "../../../modules/CommentsModules/IComment.ts";

type CommentComplexComponentType = {
    comment: IComment
}
const CommentComplexComponent:FC<CommentComplexComponentType> = ({comment}) => {
    return (
        <div className='card comment-card'>
              <h4>{comment.name}</h4>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComplexComponent;