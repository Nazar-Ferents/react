import type {FC} from "react";
import type {IPostDummy} from "../../../../modules/DummyModules/PostsModules/IPostDummy.ts";

type PostDummyComponentsType = {
    post:IPostDummy
}

const PostDummyComponents:FC<PostDummyComponentsType> = ({post}) => {
    return (
        <div className='cell'>
            <p>Post Title: {post.title}</p>
        </div>
    );
};

export default PostDummyComponents;