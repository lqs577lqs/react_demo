import React, { PureComponent } from "react";
import DemoList from "../demo_list";
import "./assets/index.less"
class HomePage extends PureComponent {
    render() {
        return <div className="home-page">
            <div className="home-guide">

            </div>
            <div className="home-content">
                <DemoList />
            </div>
        </div>
    }
}

export default HomePage;