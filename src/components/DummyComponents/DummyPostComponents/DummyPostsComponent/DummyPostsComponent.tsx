import {type FC, useEffect, useState} from "react";
import type {IPostDummy} from "../../../../modules/DummyModules/PostModulesDummy/IPostDummy.ts";
import {DummyService} from "../../../../services/DummyService/DummyService.tsx";
import DummyPostComponent from "../DummyPostComponent/DummyPostComponent.tsx";

type PropsType = {
    userID: string
}
const DummyPostsComponent:FC<PropsType> = ({userID}) => {

    const [posts, setPosts] = useState<IPostDummy[]>([])

    useEffect(() => {

        if(userID){


            DummyService.getPostsByUserId(+userID)
                .then(res => setPosts(res))
        }

    },[userID])
    return (
        <div>

            {
                posts.map(post => (<DummyPostComponent post={post} key={post.id}/>))
            }

        </div>
    );
};

export default DummyPostsComponent;