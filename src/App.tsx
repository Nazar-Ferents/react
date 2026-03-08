
import './App.css'
import {coursesAndDurationArray} from "./coursesAndDuration/coursesAndDuration.ts";
import CourseComponent from "./MyComponents/course-component.tsx";

function App() {

  return (
    <>

      <h1>Courses</h1>

        <div className="table">
            {coursesAndDurationArray.map((course, i) =>
                <CourseComponent key={i} course={course} />)}</div>



    </>
  )
}

export default App
