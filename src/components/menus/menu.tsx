import {Link} from "react-router-dom";
import './menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to={'/cars'}>Cars</Link></li>
                <li><Link to={'/carsForm'}>Cars Form</Link></li>
            </ul>
            
            </div>
    );
};

export default Menu;