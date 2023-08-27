import React from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { menus } from './constants/menu';

// Render your React component instead
const AllRoutes = () => {
    return <Routes>
        {menus.map(
            (elem, index) => <Route path={elem.path} element={elem.element} key={index} exact={elem.exact}/>
        )}

        {/* {menus.map(
            (elem,index) => <Route path={elem.path} component={() => <elem.componentBis title={elem.title} />} key={index} exact={elem.exact} />
        )} */}

    </Routes>
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