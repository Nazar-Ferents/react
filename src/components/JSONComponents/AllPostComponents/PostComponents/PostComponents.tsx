import type {IPostJSON} from "../../../../modules/JSONModules/PostsModules/IPostJSON.ts";
import type {FC} from "react";

type PostComponentsType = {

    post:IPostJSON
}

const PostComponents:FC<PostComponentsType> = ({post}) => {
    return (
        <div className='cell'>

            <p>Title:{post.title}</p>

        </div>
    );
};

export default PostComponents;