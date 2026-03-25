import {Link} from "react-router-dom";

const InterMenu = () => {
    return (
        <div>

            <ul>
                <li><Link to={'/jsonplaceholder'}>JSON</Link></li>
                <li><Link to={'/dummyjson'}>Dummy</Link></li>
            </ul>

        </div>
    );
};

export default InterMenu;