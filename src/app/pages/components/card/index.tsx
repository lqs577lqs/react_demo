import React, { PureComponent } from "react";
import "./assets/index.less"
export interface CardProps {
    title?: any

    width?: number | string

    onClick?: Function
}
class Card extends PureComponent<CardProps> {
    render() {
        return <div onClick={()=>{this.props.onClick && this.props.onClick()}} style={{ width: this.props.width || "unset" }} className="card">
            {
                this.props.title ? <div className="card-title">{this.props.title}</div> : null
            }
            {this.props.children}
        </div>
    }
}

export default Card;