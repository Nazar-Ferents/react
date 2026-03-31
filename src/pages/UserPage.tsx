import UsersComponent from "../component/UserComponents/UsersComponent/UsersComponent.tsx";
import Paginator from "../component/PaginationComponent/Paginator.tsx";

const UserPage = () => {
    return (
        <div>
            <Paginator/>

            <UsersComponent/>

        </div>
    );
};

export default UserPage;