import React from "react";
import ReactDOM from "react-dom";
import RouterConfig from "./app/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.less";

class App {
    
    render(){
        ReactDOM.render(
            <Provider store={store}>
                <RouterConfig />
            </Provider>,
            document.querySelector("#app")
        );
    }
}

export default App;