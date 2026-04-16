import type {FC} from "react";
import type {ICommentDummy} from "../../../../modules/DummyModules/CommentModulesDummy/ICommentDummy.ts";
import './DummyComment.css'

type DummyCommentComponentType = {
    comment:ICommentDummy
}
const DummyCommentComponent:FC<DummyCommentComponentType> = ({comment}) => {
    return (
        <div className='comment-card fade-in'>
            <h4>{comment.body}</h4>
            <p>Likes: {comment.likes}</p>

        </div>
    );
};

export default DummyCommentComponent;