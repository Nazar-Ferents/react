import axios from "axios";
import type {IUserWithToken} from "../modules/IUserWithToken.ts";
import type {IProducts} from "../modules/IProducts.ts";
import type {IBaseResponseModule} from "../modules/IBaseResponseModule.ts";
import type {ITokenPairs} from "../modules/ITokenPair.ts";

type loginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

export const axioInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

const retriveLocalStorage= <T>(key: string) => {
    const object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
}

axioInstance.interceptors.request.use((requestObject => {

    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUserWithToken>('user').accessToken;
    }
    return requestObject
}))

export const login = async ({username,password, expiresInMins}:loginData):Promise<IUserWithToken> => {

const {data: userWithToken} = await axioInstance.post<IUserWithToken>
                                    ('/login', {username,password,expiresInMins});
console.log(userWithToken)
    localStorage.setItem('user', JSON.stringify(userWithToken));
return userWithToken

}

export const loadAuthProducts = async ():Promise<IProducts[]> =>{
     const {data:{products}} = await axioInstance.get<IBaseResponseModule>('/products');
     return products
}

export const refresh = async ()=> {
    const IUserWithToken = retriveLocalStorage<IUserWithToken>('user')
    const {data:{accessToken,refreshToken}} = await axioInstance.post<ITokenPairs>('/refresh',{
        refreshToken:IUserWithToken.refreshToken, expiresInMin:1});
    console.log(accessToken)
    console.log(refreshToken)

    IUserWithToken.accessToken = accessToken;
    IUserWithToken.refreshToken = refreshToken;

    localStorage.setItem('user', JSON.stringify(IUserWithToken));

}