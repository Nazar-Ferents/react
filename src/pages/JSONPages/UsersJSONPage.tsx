import {Outlet} from "react-router-dom";
import JSONUsersComponent from "../../components/JSONComponents/JSONUserComponents/JSONUsersComponent/JSONUsersComponent.tsx";

const UsersJsonPage = () => {
    return (
        <div>

            <JSONUsersComponent/>

            <Outlet/>

        </div>
    );
};

export default UsersJsonPage;