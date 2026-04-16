import {type FC, useContext} from "react";
import type {ICommentJSON} from "../../../../modules/JSONModules/CommentModulesJSON/ICommentJSON.ts";
import './JSONCommentComponent.css'
import {MyContext} from "../../../../context/MyContext.tsx";

type JsonCommentComponentType = {
    comment: ICommentJSON
}
const JsonCommentComponent:FC<JsonCommentComponentType> = ({comment}) => {

    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
            <div className='comment-card fade-in'>
                <h2 className='title'>{comment.name}</h2>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default JsonCommentComponent;