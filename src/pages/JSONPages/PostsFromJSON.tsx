import {Outlet, useParams} from "react-router-dom";
import JSONPostsComponent from "../../components/JSONComponents/JSONPostComponents/JSONPostsComponent/JSONPostsComponent.tsx";

const PostsFromJson = () => {

    const {userID} = useParams()
    return (
        <div>
            <h1>Posts: </h1>

            {
                userID && <JSONPostsComponent userID={userID}/>
            }
            <Outlet/>

        </div>
    );
};

export default PostsFromJson;