import React, { PureComponent } from "react";
import "./assets/index.less"
export interface CardProps{
    title?:string
}
class Card extends PureComponent<CardProps> {
    render() {
        return <div className="card">
            {
                this.props.title?<div className="card-title">{this.props.title}</div>:null
            }
            {this.props.children}
        </div>
    }
}

export default Card;