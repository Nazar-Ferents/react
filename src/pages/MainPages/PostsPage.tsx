import InterMenu from "../../components/menu/interMenu.tsx";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <InterMenu/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;