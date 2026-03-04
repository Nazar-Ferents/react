
import './App.css'
import {coursesTitleArray} from "./titles/titles.ts";
import TitlesComponents from "./components/titlesComponents/titlesComponents.tsx";


function App() {

  return (
    <>
      <h2>Course's Title</h2>
      <ul>
        {coursesTitleArray.map((title,index) => (
            <TitlesComponents key={index} titles={title}  />
        ))}
      </ul>

    </>
  )
}

export default App
