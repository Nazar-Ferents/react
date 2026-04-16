import type {FC} from "react";
import type {ICommentJSON} from "../../../../modules/JSONModules/CommentModulesJSON/ICommentJSON.ts";
import './JSONCommentComponent.css'

type JsonCommentComponentType = {
    comment: ICommentJSON
}
const JsonCommentComponent:FC<JsonCommentComponentType> = ({comment}) => {
    return (
        <div className='comment-card fade-in'>
            <h2 className='title'>{comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};

export default JsonCommentComponent;