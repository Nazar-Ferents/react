import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import type {IPost} from "../../../modules/PostsModules/IPost.ts";
import type {IComment} from "../../../modules/CommentsModules/IComment.ts";
import type {FC} from "react";
import PostComplexComponent from "./PostComplexComponent.tsx";

type UserComplexComponentType = {
    user: IUser,
    posts: IPost[],
    comments: IComment[]
}
const UserComplexComponent:FC<UserComplexComponentType> = ({user,posts,comments}) => {

    const userPosts = posts.filter(post => post.userId === user.id)
    return (
        <div className='card user-card'>
            <h2>{user.name} {user.id}</h2>
            <p>UserName: {user.username}</p>
            <p>Phone: {user.phone}</p>
            {
             userPosts.map(post => (<PostComplexComponent key={post.id} post={post} comments={comments}/>))
            }

        </div>
    );
};

export default UserComplexComponent;