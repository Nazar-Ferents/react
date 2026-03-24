import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {routes} from "./router/routes.tsx";


createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
        {routes}
    </BrowserRouter>
)
