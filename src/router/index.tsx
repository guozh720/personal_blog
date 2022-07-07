import { Routes, Route, BrowserRouter } from "react-router-dom"
import App from '../App';
import react, { lazy, Suspense } from "react";
import Loading from "../components/Loading";


const AboutMe = lazy(() => import('../pages/Aboutme'))
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const MyRouter = () => (
    <BrowserRouter>
        <Suspense
         fallback={<div><Loading /></div>}
        >
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/aboutMe" element={<AboutMe />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>

        </Suspense>

    </BrowserRouter>
)
export default MyRouter