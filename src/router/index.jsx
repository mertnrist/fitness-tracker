import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Daily from '../pages/Profile/pages/Daily';
import Programs from '../pages/Profile/pages/Programs';
import Settings from '../pages/Profile/pages/Settings';
import Measurements from "../pages/Profile/pages/Measurements";
import Social from "../pages/Profile/pages/Social";
import UserProfile from "../pages/Profile/pages/UserProfile";
import MyProfile from "../pages/Profile/pages/MyProfile";
import Chat from "../pages/Profile/pages/Chat";

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
        path: '/profil/ben',
        element: <MyProfile />
    },
    {
        path: '/profil/ayarlarim',
        element: <Settings />
    },
    {
        path: '/profil/olcumler',
        element: <Measurements />
    },
    {
        path: '/profil/arkadaslar',
        element: <Social />
    },
    {
        path: '/profil/:username',
        element: <UserProfile />
    },
    {
        path: '/profil/mesajlarim',
        element: <Chat />
    }
])

export default router;