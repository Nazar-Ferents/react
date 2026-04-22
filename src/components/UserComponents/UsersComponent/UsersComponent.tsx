import {useEffect} from "react";
import UserComponent from "../UserComponent/UserComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../../redux/userSlice/userSlice.ts";

const UsersComponent = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(userSliceActions.loadUsers())


    },[])
    return (
        <div>
            {
                users.map(user => (<UserComponent user={user} key={user.id} />))
            }
        </div>
    );
};

export default UsersComponent;