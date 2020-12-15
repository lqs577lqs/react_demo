import React from "react";
import { Router, Route, Switch } from "react-router-dom";
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
                <Switch>
                    {routes.map((value=> <Route key={value.path} path={value.path} component={value.lazeComponent}/>))}
                </Switch>
                {/* {routes.map((value=> {return value.redirect?<Route key={value.path} path={value.path}><Redirect to={value.redirect}/></Route>:<Route key={value.path} path={value.path} component={value.lazeComponent}/>}))} */}
            </Router>
}

export default RouterConfig;