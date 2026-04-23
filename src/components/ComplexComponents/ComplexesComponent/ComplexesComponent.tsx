import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {loadUsers} from "../../../redux/functions/funtctionsForUserSlice.ts";
import {loadPosts} from "../../../redux/postSlise/postSlice.ts";
import {loadComments} from "../../../redux/commentSlice/commentSlice.ts";
import UserComplexComponent from "../ComplexComponent/UserComplexComponent.tsx";

const ComplexesComponent = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {

        if(users.length === 0){
            dispatch(loadUsers());
        }

        if(posts.length === 0){
            dispatch(loadPosts());
        }

        if (comments.length === 0){
            dispatch(loadComments());
        }
    },[])

    return (
        <div>
            {
                users.map(user => (<UserComplexComponent user={user} key={user.id} posts={posts} comments={comments} />))
            }

        </div>
    );
};

export default ComplexesComponent;