import type {IUserJSON} from "../../modules/JSONModules/UserModulesJSON/IUserJSON.ts";
import {JSONUrls} from "../../constants/JSONUrls/JSONUrls.ts";


export const JSONService = {

    getAllJSONUsers: async ():Promise<IUserJSON[]> => {

        return await fetch(JSONUrls.users.allUsers)
            .then(res => res.json())
    }
}