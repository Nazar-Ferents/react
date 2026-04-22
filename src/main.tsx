import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";
import {Provider} from "react-redux";
import {storeJSON} from "./redux/storeJSON.ts";

createRoot(document.getElementById('root')!).render(
<Provider store={storeJSON}>
    <RouterProvider router={routes}></RouterProvider>
</Provider>
)
