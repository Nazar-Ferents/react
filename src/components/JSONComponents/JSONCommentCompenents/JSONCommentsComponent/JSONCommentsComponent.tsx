import {type FC, useEffect, useState} from "react";
import type {ICommentJSON} from "../../../../modules/JSONModules/CommentModulesJSON/ICommentJSON.ts";
import {JSONService} from "../../../../services/JSONService/JSONService.tsx";
import JSONCommentComponent from "../JSONCommentComponent/JSONCommentComponent.tsx";

type PropsType = {
    postID: string
}
const JsonCommentsComponent:FC<PropsType> = ({postID}) => {

    const [comments, setComments] = useState<ICommentJSON[]>([])

    useEffect(() => {

        if(postID){

            JSONService.getCommentsByPostId(+postID)
                .then(res => setComments(res))
        }
    }, [postID]);
     return (
        <div>
            {
                comments.map(comment => (<JSONCommentComponent key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

export default JsonCommentsComponent;