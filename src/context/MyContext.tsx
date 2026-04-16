import {createContext} from "react";

export type MyContextType = {
    theme: string,
    changeTheme: (theme:string) => void
}

const Default:MyContextType = {
    theme: 'dark',
    changeTheme: (theme:string) => {
        console.log(theme);
    }
}

export const MyContext = createContext<MyContextType>(Default)