import type {FC} from 'react';
import type {ICourses} from "../../modules/courses-module.ts";
import './courseArray.css'

type CourseArrayType = {
    course: ICourses;
}

const CourseArrayComponent:FC<CourseArrayType> = ({course}) => {
    return (
        <div className='cell'>

            <h2>{course.title}</h2>
            <p>Month Duration: {course.monthDuration};</p>
            <p>Hour Duration: {course.hourDuration};</p>
            <ul>
                {course.modules.map((module,index) => (
                    <li key={index}> {module} </li>
                ))}
            </ul>

        </div>
    );
};

export default CourseArrayComponent;