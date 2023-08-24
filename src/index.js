import React from "react"
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { menus } from './constants/menu';

// Render your React component instead
const RoutesA = () => {
    return <Routes>
        {menus.map(
            (menu, index) =>
                <Route path={menu.path} exact={menu.exact} key={index}>
                    <RoutesA.component a="toto" b="tata"/>
                </Route>
        )
        }
    </Routes>
}

const RouteRender = ()=><React.StrictMode>
<Router >
    <RoutesA />
</Router>
</React.StrictMode>
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<RouteRender/>)