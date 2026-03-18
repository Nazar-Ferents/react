import {useEffect, useState} from "react";
import type {IComment} from "../../modules/IComment.ts";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";
import {getComments} from "../../service/comments_service.ts";
import './CommentsComponent.css'


const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {

        getComments()
            .then(res => setComments(res))

    },[])

    return (
        <div className='table'>

            {
                comments.map((comment,index) =>
                    (<CommentComponent comment={comment} key={index}/>))
            }

        </div>
    );
};

export default CommentsComponent;