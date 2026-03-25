import InterMenu from "../../components/menu/interMenu.tsx";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>

            <InterMenu/>
            <Outlet/>

        </div>
    );
};

export default CommentsPage;