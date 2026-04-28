import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className='navbar'>
                <li><Link to={'/'} className='nav-link'>Home Page</Link></li>
                <li><Link to={'cars'} className='nav-link'>Cars</Link></li>
                <li><Link to={'carsForm'} className='nav-link'>Cars Form</Link></li>
            </ul>
        </div>
    );
};

export default Menu;