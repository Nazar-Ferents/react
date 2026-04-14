import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranch = () => {

    const {countValue} = useContext(MyContext);
    return (
        <div>
            Left BranchA
            <p>Current: {countValue}</p>
        </div>
    );
};

export default LeftBranch;