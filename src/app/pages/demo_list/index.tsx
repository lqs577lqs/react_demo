import React, { FC } from "react";
import Card from "../components/card";
import DemoContent from "./components/demoContent"
import { Button } from "antd";
import "./assets/index.less";
import { useFunctions, useUnit } from "../../../redux/unit/hooks";
import { createBrowserHistory } from 'history';

const DemoList: FC<{}> = (props) => {
    const { add } = useFunctions()();
    let rHistory = createBrowserHistory();
    const state = useUnit();
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
        <div className="demo-container">
            <Button onClick={() => { add(5) }}>这个是:{state.number}</Button>
            <Button onClick={() => { rHistory.push({ pathname: "/home" });history.go(); }}>主页</Button>
            {
                data.map(val => {
                    return <Card key={val} title={val} width="30%" children={<DemoContent />} />
                })
            }
        </div>
    )
}

export default DemoList;