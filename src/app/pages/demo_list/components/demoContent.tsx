import React, { PureComponent, ReactNode } from "react";
import "../assets/index.less";
import { connect } from 'react-redux';

class DemoList extends PureComponent<any, any> {
    render() {
        return <div className="demo-content">
            {this.props.number}
        </div>
    }
}

export default connect((state: any) => { return { number: state.numberReducer.number } })(DemoList);