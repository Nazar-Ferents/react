import {type FC, useContext} from "react";
import type {IPostDummy} from "../../../../modules/DummyModules/PostModulesDummy/IPostDummy.ts";
import {useNavigate} from "react-router-dom";
import './DummyPost.css'
import {MyContext} from "../../../../context/MyContext.tsx";

type DummyPostComponentType = {
     post:IPostDummy
}
const DummyPostComponent:FC<DummyPostComponentType> = ({post}) => {

    const navigation = useNavigate()
    const handler = () => {
        navigation('commentsByPostIdDummy/'+post.id)
    }
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
            <div className='post-card fade-in' >
                <h2 className='title'>{post.title}</h2>
                <p>{post.body}</p>
                <p>Views: {post.views}</p>
                <button onClick={handler} className='btn btn-secondary'>Comments</button>

            </div>
        </div>
    );
};

export default DummyPostComponent;