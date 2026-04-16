import {useParams} from "react-router-dom";
import DummyCommentsComponent from "../../components/DummyComponents/DummyCommentComponents/DummyCommentsComponent/DummyCommentsComponent.tsx";


const CommentsFromDummy = () => {

    const {postID} = useParams()
    return (
        <div>
            <h1>Comments: </h1>
            {
                postID && <DummyCommentsComponent postID={postID}/>
            }

        </div>
    );
};

export default CommentsFromDummy;