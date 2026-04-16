import {type FC, useContext} from "react";
import type {IPostJSON} from "../../../../modules/JSONModules/PostModulesJSON/IPostJSON.ts";
import {useNavigate} from "react-router-dom";
import './JSONPostComponent.css'
import {MyContext} from "../../../../context/MyContext.tsx";

type JSONPostComponentType = {
    post: IPostJSON
}
const JSONPostComponent:FC<JSONPostComponentType> = ({post}) => {
    const navigation = useNavigate()
    const handler = () => {
        navigation('commentsByPostIdJSON/'+post.id)
    }
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
            <div className='post-card fade-in'>
                <h2 className='title'>Post ID: {post.id}</h2>
                <p>{post.body}</p>
                <button onClick={handler} className='btn btn-secondary'>Comments</button>
            </div>
        </div>
    );
};

export default JSONPostComponent;