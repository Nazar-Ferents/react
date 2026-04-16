import {Link} from "react-router-dom";
import './menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'usersDummy'}>Users of Dummy</Link></li>
                <li><Link to={'usersJSON'}> Users of JSON</Link></li>
            </ul>

        </div>
    );
};

export default Menu;