import {useEffect} from "react";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {loadComments} from "../../../redux/commentSlice/commentSlice.ts";

const CommentsComponent = () => {

    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
const dispatch = useAppDispatch();


    useEffect(() => {

         dispatch(loadComments());

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