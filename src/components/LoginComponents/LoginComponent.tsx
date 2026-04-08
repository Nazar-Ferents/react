import {useEffect} from "react";
import {login} from "../../services/service.ts";

const LoginComponent = () => {

    useEffect(() => {
        login({
            username: "emilys",
            password: "emilyspass",
            expiresInMins: 1
        })
    })
    return (
        <div>

        </div>
    );
};

export default LoginComponent;