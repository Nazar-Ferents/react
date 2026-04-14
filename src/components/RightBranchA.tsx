import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranch = () => {

    const {countValue, increment} = useContext(MyContext);
    return (
        <div>

            Right Branch A
            <button onClick={()=>{
                increment(countValue)
            }}>click me to increment counter in LBA</button>
            
            </div>
    );
};

export default RightBranch;