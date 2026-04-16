import {useParams} from "react-router-dom";
import JSONCommentsComponent from "../../components/JSONComponents/JSONCommentCompenents/JSONCommentsComponent/JSONCommentsComponent.tsx";

const CommentsFromJson = () => {

    const {postID} = useParams();
    return (
        <div>
            <h1>Comments: </h1>
            {
                postID && <JSONCommentsComponent postID={postID} />
            }
        </div>
    );
};

export default CommentsFromJson;