import React, { PureComponent } from "react";
import "../assets/index.less";

class DemoList extends PureComponent<any, any> {
    render() {
        return <div className="demo-content">
            {this.props.number}
        </div>
    }
}

export default DemoList;