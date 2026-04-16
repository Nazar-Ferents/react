import {type FC, useEffect, useState} from "react";
import {DummyService} from "../../../../services/DummyService/DummyService.tsx";
import type {ICommentDummy} from "../../../../modules/DummyModules/CommentModulesDummy/ICommentDummy.ts";
import DummyCommentComponent from "../DummyCommentComponent/DummyCommentComponent.tsx";

type PropsType = {
    postID: string;
}
const DummyCommentsComponent:FC<PropsType> = ({postID}) => {

    const [comments, setComments] = useState<ICommentDummy[]>([])

    useEffect(() => {

        if(postID){

            DummyService.getCommentsByPostId(+postID)
                .then(res => {
                    setComments(res)
                })
        }
    },[postID])
    return (
        <div>
            {
                comments.map(comment => (<DummyCommentComponent comment={comment} key={comment.id}/>))
            }
        </div>
    );
};

export default DummyCommentsComponent;