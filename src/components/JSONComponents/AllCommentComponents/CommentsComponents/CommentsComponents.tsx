import {useEffect, useState} from "react";
import type {ICommentJSON} from "../../../../modules/JSONModules/CommentsModules/ICommentJSON.ts";
import {serviceJSON} from "../../../../services/JSON_api/JSON_api.ts";
import CommentComponents from "../CommentComponents/CommentComponents.tsx";


const CommentsComponents = () => {

    const [comments, setComments] = useState<ICommentJSON[]>([]);

    useEffect(() => {

        serviceJSON.getComments()
            .then(allComments => setComments(allComments))
    }, []);

    return (
        <div className='table'>
            {
                comments.map(comment => (<CommentComponents key={comment.id} comment={comment} />))
            }
        </div>
    );
};

export default CommentsComponents;