import {useEffect, useState} from "react";
import type {IComment} from "../../../modules/CommentsModules/IComment.ts";
import {serviceJSON} from "../../../services/services.tsx";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {

        serviceJSON.getComments()
            .then(res => setComments(res))
    },[])
    return (
        <div>
            {
                comments.map(comment => (<CommentComponent key={comment.id} comment={comment} />))
            }
        </div>
    );
};

export default CommentsComponent;