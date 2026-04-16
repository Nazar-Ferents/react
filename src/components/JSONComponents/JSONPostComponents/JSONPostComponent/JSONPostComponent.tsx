import type {FC} from "react";
import type {IPostJSON} from "../../../../modules/JSONModules/PostModulesJSON/IPostJSON.ts";
import {useNavigate} from "react-router-dom";
import './JSONPostComponent.css'

type JSONPostComponentType = {
    post: IPostJSON
}
const JSONPostComponent:FC<JSONPostComponentType> = ({post}) => {
    const navigation = useNavigate()
    const handler = () => {
        navigation('commentsByPostIdJSON/'+post.id)
    }
    return (
        <div className='post-card fade-in'>
            <h2 className='title'>Post ID: {post.id}</h2>
            <p>{post.body}</p>
            <button onClick={handler} className='btn btn-secondary'>Comments</button>
        </div>
    );
};

export default JSONPostComponent;