import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";

export default createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/hakkimizda',
        element: <About />
    }
])