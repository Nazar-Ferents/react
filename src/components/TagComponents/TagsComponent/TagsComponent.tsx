import {useEffect, useState} from "react";
import type {ITags} from "../../../modules/RecipeModules/ITags.ts";
import {recipesApi} from "../../../services/serviceApi.tsx";
import TagComponent from "../TagComponent/TagComponent.tsx";

const TagsComponent = () => {

    const [tags,setTags] = useState<ITags>([])

    useEffect(() => {

        recipesApi.getAllTags()
            .then(tags => setTags(tags))
    })
    return (
        <div>
            {
                tags.map((tag,index) => (<TagComponent key={index} tag={tag}/>))
            }
        </div>
    );
};

export default TagsComponent;