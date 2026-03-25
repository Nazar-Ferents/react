import type {FC} from "react";
import type {ICommentDummy} from "../../../../modules/DummyModules/ComentsModules/ICommentDummy.ts";


type CommentDummyComponentsType = {
    comment:ICommentDummy
}
const CommentDummyComponents:FC<CommentDummyComponentsType> = ({comment}) => {
    return (
        <div className='cell'>

            <p>Comment: {comment.body}</p>

        </div>
    );
};

export default CommentDummyComponents;