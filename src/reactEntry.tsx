import React from "react";
import ReactDOM from "react-dom";
import RouterConfig from "./app/index";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import "./index.less";
import HomePage from "./app/pages/home";

class App {
    
    render(){
        ReactDOM.render(
            <Provider store={store}>
                <HomePage />
            </Provider>,
            document.querySelector("#app")
        );
    }
}

export default App;