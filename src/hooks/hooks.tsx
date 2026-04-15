import {useEffect, useState} from "react";


export const useFetch = <T,> (url: string) => {

    const [data, setData] = useState<T>()

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
        .then(value => setData(value))
    },[])
    return data
}