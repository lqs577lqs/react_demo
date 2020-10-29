import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/home/index";
import ActivityMemory from "./pages/activity_memory";

const routes = [{
    path: "/home",
    lazeComponent: HomePage
},{
    path: "/activity_memory",
    lazeComponent: ActivityMemory
}];

function RouterConfig() {
    return  <Router 
                history={createBrowserHistory()}
            >
                {routes.map((value=><Route path={value.path} component={value.lazeComponent}/>))}
            </Router>
}

export default RouterConfig;