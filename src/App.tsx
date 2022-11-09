import { Outlet } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import React from "react";
const App = () => {
    return (
        <>
            <MyHeader />
            <Outlet />
        </>
    )
}
export default App;