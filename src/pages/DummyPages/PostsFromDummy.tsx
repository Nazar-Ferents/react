import {Outlet, useParams} from "react-router-dom";
import DummyPostsComponent from "../../components/DummyComponents/DummyPostComponents/DummyPostsComponent/DummyPostsComponent.tsx";

const PostsFromDummy = () => {

    const {userID} = useParams()
    console.log(userID)
    return (
        <div>
            <h1>Posts: </h1>
            {
                userID && <DummyPostsComponent userID={userID}/>
            }
            <Outlet/>

        </div>
    );
};

export default PostsFromDummy;