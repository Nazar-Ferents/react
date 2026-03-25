import type {ICommentDummy} from "../../../../modules/DummyModules/ComentsModules/ICommentDummy.ts";
import {useEffect, useState} from "react";
import {serviceDummy} from "../../../../services/Dummy_api/Dummy_api.ts";
import CommentDummyComponents from "../CommentDummyComponents/CommentDummyComponents.tsx";


const CommentsDummyComponents = () => {

    const [comments,setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {

        serviceDummy.getComments()
            .then(allComments => setComments(allComments));
    },[])
    return (
        <div className='table'>
            {
                comments.map(comment => (<CommentDummyComponents key={comment.id} comment={comment} />))
            }
        </div>
    );
};

export default CommentsDummyComponents;