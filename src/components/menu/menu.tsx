import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>

            <ul>
                <li><Link to={''}>HomePage</Link></li>
                <li><Link to={'/a'}>A Page</Link></li>
                <li><Link to={'/b'}>B Page</Link></li>
                <li><Link to={'/c'}>C Page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;