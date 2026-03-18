import {useEffect, useState} from "react";
import type {IComments} from "../../../modules/IComments.ts";
import {getComments} from "../../../service/service_dummyJSON.ts";
import ComponentComments from "../ComponentComments/ComponentComments.tsx";
import './ComponentsComments.css'


const ComponentsComments = () => {

    const [comments, setComments] = useState<IComments[]>([])


    useEffect(() => {

        getComments()
            .then(res => setComments(res))

    },[])

    return (
        <div>
            <h2>Comments</h2>
            <div className='table'>
                {comments.map((comment,index) => (<ComponentComments key={index} comment={comment}/>))}
            </div>
        </div>
    );
};

export default ComponentsComments;