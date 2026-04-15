import {Outlet} from "react-router-dom";
import DummyUsersComponent from "../../components/DummyComponents/DummyUserComponents/DummyUsersComponent/DummyUsersComponent.tsx";

const UsersDummyPage = () => {
    return (
        <div>

            <DummyUsersComponent />

            <Outlet/>

        </div>
    );
};

export default UsersDummyPage;