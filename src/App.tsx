import {useState} from "react";
import {MyContext} from "./context/MyContext.tsx";
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";

const App = () => {

  const [theme, setTheme] = useState<string>('dark');


  return (
      <div>
        <MyContext.Provider value={{
          theme:theme,
          changeTheme:(themeValue:string) =>{
            setTheme(themeValue)
          }
        }}>
          <RouterProvider router={routes}></RouterProvider>
        </MyContext.Provider>

      </div>
  );
};

export default App;