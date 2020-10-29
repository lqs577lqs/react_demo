import React, { PureComponent } from "react";
import { Button, Select } from "antd";
import Card from "../components/card";
import "./assets/index.less";

interface ActivityMemoryState {
    curNum: number
    length: number
}

class ActivityMemory extends PureComponent<any, ActivityMemoryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            curNum: 0,
            length: 0
        }
    }

    timeout:any

    /**
     * @function: setRandomNum
     * @author: Leslie
     * @param {min} 最小值
     * @param {min} 最大值
     * @return {number} 
     */
    setRandomNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * @function: getActivityContent
     * @author: Leslie
     * @param {curNum} 当前值
     * @return {ReactDOM} 
     */
    getActivityContent = (curNum: number) => {
        let {
            length
        } = this.state;
        let options = [];
        for(let i=4;i<10;i++){
            options.push({
                label:i,
                value:i
            });
        }
        
        return <div className="activity">
            <div className="activity-header">
                <Button onClick={()=>this.setCurNum(length,"start")}>开始</Button>
                <Button onClick={()=>this.setCurNum(length,"end")}>暂停</Button>
                <Select options={options} onChange={(e:any)=>{this.setState({length: e})}}/>
            </div>
            <div className="activity-content">
                <span>{curNum}</span>
            </div>
        </div>
    }

    /**
     * @function: 启动定时器
     * @author: Leslie
     * @param {curNum} 当前值
     * @return {ReactDOM} 
     */
    setCurNum = (length:number,type:string) => {
        if(type === "start"){
            this.timeout = setInterval(() => {
                console.log("type",type);
                this.setState({
                    curNum: this.setRandomNum(0,length)
                });
            }, 750);
        }else{
            clearTimeout(this.timeout);
        }
    }

    render() {
        let {
            curNum
        } = this.state;
        return <Card title="活动记忆实验范式" children={this.getActivityContent(curNum)} />
    }
}

export default ActivityMemory;