import React, { useState } from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import menus from './constants/menus';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./components/design/Layout";
import UserContext from "./context/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";

// Render your React component instead
const AllRoutes = () => {

    const [user, setUser] = useLocalStorage("user",null);

    return <>
        <UserContext.Provider value={{ user, setUser }}> 
            <Layout/>
            <Routes>
                {menus.map(
                    (elem, index) => <Route path={elem.path} element={elem.element} key={index} exact={elem.exact}/>
                )}
            </Routes>
        </UserContext.Provider>
    </>
}
    
const RouteRender = ()=>{
    return <React.StrictMode>
        <Router >
            <AllRoutes />
        </Router>
    </React.StrictMode>
}
    
const root = createRoot(document.getElementById("root"));
root.render(<RouteRender/>)