import {Link} from "react-router-dom";

const RecipeMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'tags'}>Tags</Link></li>
            </ul>
        </div>
    );
};

export default RecipeMenu;