import {type FC, useEffect, useState} from "react";
import type {IPostJSON} from "../../../../modules/JSONModules/PostModulesJSON/IPostJSON.ts";
import {JSONService} from "../../../../services/JSONService/JSONService.tsx";
import JSONPostComponent from "../JSONPostComponent/JSONPostComponent.tsx";

type PropsType = {
    userID: string
}
const JSONPostsComponent:FC<PropsType> = ({userID}) => {

    const [posts, setPosts] = useState<IPostJSON[]>([]);

    useEffect(() => {

        if(userID){
            JSONService.getPostsByUserId(+userID)
                .then(res => {
                    setPosts(res)
                    console.log(res)
                })
        }

    },[userID])
    return (
        <div>
            {
                posts.map(post => (<JSONPostComponent post={post} key={post.id}/>))
            }
        </div>
    );
};

export default JSONPostsComponent;