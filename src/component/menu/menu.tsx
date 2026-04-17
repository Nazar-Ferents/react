import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>

            <ul>
                <li><Link to={'users'}>Users Page</Link></li>
                <li><Link to={'users/1'}>User Page</Link></li>
                <li><Link to={'posts'}>Posts Page</Link></li>
            </ul>

        </div>
    );
};

export default Menu;