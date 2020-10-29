import React from "react";
import ReactDOM from "react-dom";
import RouterConfig from "./app/index";
import "./index.less";

class App {
    
    render(){
        ReactDOM.render(
            <RouterConfig />,
            document.querySelector("#app")
        );
    }
}

export default App;