import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Daily from '../pages/Profile/pages/Daily';
import Programs from '../pages/Profile/pages/Programs';
import Settings from '../pages/Profile/pages/Settings';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/hakkimizda',
        element: <About />
    },
    {
        path: '/profil',
        element: <Profile />,
    },
    {
        path: '/profil/gunluk',
        element: <Daily />
    },
    {
        path: '/profil/antreman-programlarim',
        element: <Programs />
    },
    {
        path: '/profil/ayarlarim',
        element: <Settings />
    },
])

export default router;