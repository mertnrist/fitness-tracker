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
import Match from "../pages/Profile/pages/Match";
import Dashboard from "../pages/Profile/pages/Dashboard";

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
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'gunluk',
                element: <Daily />
            },
            {
                path: 'antreman-programlarim',
                element: <Programs />
            },
            {
                path: 'ben',
                element: <MyProfile />
            },
            {
                path: 'ayarlarim',
                element: <Settings />
            },
            {
                path: 'olcumler',
                element: <Measurements />
            },
            {
                path: 'arkadaslar',
                element: <Social />
            },
            {
                path: ':username',
                element: <UserProfile />
            },
            {
                path: 'mesajlarim',
                element: <Chat />
            },
            {
                path: 'eslesme',
                element: <Match />
            }
        ]
    }
])

export default router;