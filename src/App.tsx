
import './App.css'
import ComponentsTodos from "./components/todos/ComponentsTodos/ComponentsTodos.tsx";
import ComponentsPosts from "./components/posts/ComponentsPosts/ComponentsPosts.tsx";
import ComponentsComments from "./components/comments/ComponentsComments/ComponentsComments.tsx";

function App() {

  return (
    <>
        <ComponentsTodos/>
        <ComponentsPosts/>
        <ComponentsComments/>
    </>
  )
}

export default App
