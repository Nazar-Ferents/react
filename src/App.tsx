
import './App.css'
import type {coursesAndDurationArray} from "./coursesAndDuration/coursesAndDuration.ts";
import CourseComponent from "./MyComponents/course-component.tsx";

function App() {

  return (
    <>

      <p>Courses</p>

      {coursesAndDurationArray.map((course, i) => <CourseComponent key={i} course={course} />)}

    </>
  )
}

export default App
