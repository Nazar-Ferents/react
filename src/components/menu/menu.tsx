import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>

            <ul>
                <li><Link to={'/'}>HomePage</Link></li>
                <li><Link to={'/login'}>Login Page </Link></li>
                <li><Link to={'/auth/resources'}>Auth Resources Page </Link></li>
            </ul>

        </div>
    );
};

export default Menu;