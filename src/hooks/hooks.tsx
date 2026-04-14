import {useEffect, useState} from "react";

export const useFetch = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {setUser(data)});
    }, []);

    return users;
}