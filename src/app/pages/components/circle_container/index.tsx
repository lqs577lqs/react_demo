import React, { PureComponent } from "react";
import "./assets/index.less"
export interface CircleContainerProps {
    color?: any

    size?: number | string

    onClick?: () => void

    renderItem?: () => any
}

class CircleContainer extends PureComponent<CircleContainerProps> {
    render() {
        let size = this.props.size || 50;
        let fontSize = (size && Number(size) / 5) || 14;
        return <div style={{
            borderColor: `${this.props.color || "#000000"}`,
            borderRadius: size,
            width: size,
            height: size,
            fontSize: fontSize
        }}
            className={this.props.onClick?"cir-container click":"cir-container"}
            onClick={()=> this.props.onClick && this.props.onClick()}
        >
            <div className="cir-container-content">
                {this.props.renderItem && this.props.renderItem() || "test"}
            </div>
        </div>
    }
}

export default CircleContainer;