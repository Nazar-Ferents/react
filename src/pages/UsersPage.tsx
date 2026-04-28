import UsersComponent from "../components/UserComponents/UsersComponent/UsersComponent.tsx";
import PaginationForUsers from "../pagination/paginationForUsers.tsx";

const UsersPage = () => {
    return (
        <div>
            <PaginationForUsers/>
                <UsersComponent/>
        </div>
    );
};

export default UsersPage;