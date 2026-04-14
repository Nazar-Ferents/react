import {createContext} from "react";


type MyContextType = {
    countValue: number;
    increment: (obj:number) => void;
}

export const init = {
    countValue: 0,
    increment: (obj:number) => {
        console.log(obj);
    }
}

export const MyContext = createContext<MyContextType>(init)