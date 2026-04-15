import type {IUserDummy} from "../../modules/DummyModules/UsesrModulesDummy/IUserDummy.ts";
import {DummyUrls} from "../../constants/DummyUrls/DummyUrls.ts";


export const DummyService = {

    getAllDummyUsers: async ():Promise<IUserDummy[]> => {
         const userObject = await fetch(DummyUrls.users.allUsers)
            .then(res => res.json())

        return userObject.users;
    }
}