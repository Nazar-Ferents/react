import type {FC} from "react";
import {Link} from "react-router-dom";


type TagComponentType = {
    tag : string,
}
const TagComponent:FC<TagComponentType> = ({tag}) => {
    return (
        <div>
            <div>
                <Link to={'recipesByTags/' + tag}>{tag}</Link>
            </div>

        </div>
    );
};

export default TagComponent;