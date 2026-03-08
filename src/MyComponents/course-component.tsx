import type {FC} from 'react'
import type {ICourses} from "../modules/ICourses.ts";

type CourseType = {
    course: ICourses;
}

const CourseComponent:FC<CourseType> = ({course}) => {
    return (
        <div className='cell'>
            <h2>{course.title}</h2>
            <p>Month Duration:{course.monthDuration}</p>

        </div>
    );
};

export default CourseComponent;