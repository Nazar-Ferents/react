import {type FC} from 'react';
import type {IComment} from "../../modules/IComment.ts";
import './CommentComponent.css'

type CommentComponentType = {
    comment:IComment
}

const CommentComponent:FC<CommentComponentType> = ({comment}) => {
    return (
        <div className='cell'>


            <h3>id labore ex et quam laborum</h3>
            <p>PostID: {comment.postId}</p>
            <p>ID: {comment.id}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>

        </div>
    );
};

export default CommentComponent;