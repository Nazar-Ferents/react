import type {IComments} from "../../../modules/IComments.ts";
import type {FC} from "react";
import './ComponentComments.css'

type ComponentCommentsType = {
    comment:IComments
}

const ComponentComments:FC<ComponentCommentsType> = ({comment}) => {
    return (
        <div className='cell'>

            <h3>Post of {comment.user.username}</h3>
            <p>PostID: {comment.postId}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.likes}</p>

        </div>
    );
};

export default ComponentComments;