import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../../modules/PostsModules/IPost.ts";
import {postService} from "../../../services/apiService.ts";

type PostsComponentType = {
    userId:string
}

const PostsComponent:FC<PostsComponentType> = ({userId}) => {

    const [posts,setPosts]= useState<IPost[]>([])

    useEffect(() => {

        if(userId){
            postService.getPostsOfUserByID(+userId)
                .then(value => {
                    setPosts(value)
                })
        }
    },[userId])

    return (
        <div>

            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;