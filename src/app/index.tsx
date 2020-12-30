import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ActivityMemory from "./pages/components/activity_memory";
import DemoList from "./pages/demo_list/index";
import MainPage from "./pages/main";

const routes = [{
    path: "/activity_memory",
    lazeComponent: ActivityMemory
},{
    path: "/demo_list",
    lazeComponent: DemoList
},{
    path: "/main_page",
    lazeComponent: MainPage
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