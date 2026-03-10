import {useState} from "react";


const App = () => {

  let [counter, setCounter] = useState(0);
  console.log('mount')
  return (
      <div>


        <h2>{counter}</h2>
        <button onClick={() => {
          setCounter(++counter);
        }}>increment</button>

        <button onClick={()=>{
          setCounter(prevState => {
            return --prevState;
          });
        }}>decrement</button>

      </div>
  );
};

export default App;
