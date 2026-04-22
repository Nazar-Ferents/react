import type {FC} from "react";
import type {IComment} from "../../../modules/CommentsModules/IComment.ts";

type  CommentComponentType = {
    comment:IComment
}
const CommentComponent:FC<CommentComponentType> = ({comment}) => {
    return (
        <div>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;