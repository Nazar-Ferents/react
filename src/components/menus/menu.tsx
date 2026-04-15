import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'usersDummy'}>Users of Dummy</Link></li>
                <li><Link to={'usersJSON'}> Users of JSON</Link></li>
            </ul>

        </div>
    );
};

export default Menu;