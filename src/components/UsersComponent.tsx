import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/hooks.tsx";

const UsersComponent = () => {
    console.log('users component ');

    const arr:number[] = useMemo(() => {
        return [11,22,33]
    },[])


    const foo = useCallback(() =>{
        console.log('test');
    },[])

    const users = useFetch()


    return (
        <div>


            {
                users.map((user,index)=>(<UserComponent key={index}  user={user} foo={foo} arr={arr}/>))
            }


        </div>
    );
};

export default UsersComponent;