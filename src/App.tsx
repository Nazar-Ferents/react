
import './App.css'
import {useFetch} from "./hooks/hooks.tsx";

function App() {

  const users = useFetch<{id:number,name:string}[]>('https://jsonplaceholder.typicode.com/users')

  return (
    <>

      {
        users &&
        users.map (user => (
            <div key={user.id}>{user.name}</div>
        ))
      }

    </>
  )
}

export default App
