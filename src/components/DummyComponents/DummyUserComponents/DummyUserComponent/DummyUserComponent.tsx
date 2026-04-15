import type {FC} from "react";
import type {IUserDummy} from "../../../../modules/DummyModules/UsesrModulesDummy/IUserDummy.ts";

type DummyUserComponentType = {
    user:IUserDummy
}

const DummyUserComponent:FC<DummyUserComponentType> = ({user}) => {
    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone: {user.phone}</p>

        </div>
    );
};

export default DummyUserComponent;