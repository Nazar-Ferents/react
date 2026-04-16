import {type FC, useContext} from "react";
import type {ICommentDummy} from "../../../../modules/DummyModules/CommentModulesDummy/ICommentDummy.ts";
import './DummyComment.css'
import {MyContext} from "../../../../context/MyContext.tsx";

type DummyCommentComponentType = {
    comment:ICommentDummy
}
const DummyCommentComponent:FC<DummyCommentComponentType> = ({comment}) => {

    const {theme} = useContext(MyContext)

    return (
        <div className={theme}>
            <div className='comment-card fade-in'>
                <h4>{comment.body}</h4>
                <p>Likes: {comment.likes}</p>

            </div>
        </div>
    );
};

export default DummyCommentComponent;