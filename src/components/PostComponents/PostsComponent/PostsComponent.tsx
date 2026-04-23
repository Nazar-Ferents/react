import {useEffect} from "react";
import PostComponent from "../PostComponent/PostComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {loadPosts} from "../../../redux/postSlise/postSlice.ts";

const PostsComponent = () => {

    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(loadPosts());
    },[])
    return (
        <div>
            {
                posts.map(post => (<PostComponent post={post} key={post.id} />))
            }
        </div>
    );
};

export default PostsComponent;