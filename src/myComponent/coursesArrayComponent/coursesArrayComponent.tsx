
import {coursesArray} from "../../data/courses-array.ts";
import CourseArrayComponent from "../courseArrayComponent/courseArrayComponent.tsx";
import './coursesArray.css'


export function Courses() {

    return (
        <>
            <h1>Courses</h1>
            <div className='table'>{
                coursesArray.map((course,index) => (
                    <CourseArrayComponent course={course} key={index} />
                ))

            }</div>


        </>
    )
}