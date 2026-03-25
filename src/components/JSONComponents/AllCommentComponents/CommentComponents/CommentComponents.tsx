import type {FC} from "react";
import type {ICommentJSON} from "../../../../modules/JSONModules/CommentsModules/ICommentJSON.ts";

type CommentComponentsType = {
    comment:ICommentJSON
}

const CommentComponents:FC<CommentComponentsType> = ({comment}) => {
    return (
        <div className='cell'>

            <p>Comment Name: {comment.name}</p>

        </div>
    );
};

export default CommentComponents;