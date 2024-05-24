import React, {lazy, Suspense} from "react";
import {RouteObject, useRoutes} from "react-router-dom";
import App from '../App';
import Loading from "../components/Loading";
import NoFoundPage from "../pages/404";

const AboutMe = lazy(() => import('../pages/Aboutme'))
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Coding = lazy(() => import('../pages/Coding'))

const routeConfig: RouteObject[] =
    [
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    index: true,
                    element: <Coding/>
                },
                {
                    path: '/home',
                    element: <Home/>
                },
                {
                    path: '/aboutMe',
                    element: <AboutMe/>
                },
                {
                    path: '/coding',
                    element: <Coding/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '*',
            element: <NoFoundPage/>
        }

    ]

export const MyRouter = () => {
    const routeElement = useRoutes(routeConfig);
    return (
        <Suspense
            fallback={<div><Loading/></div>}
        >
            {routeElement}
        </Suspense>

    )
}