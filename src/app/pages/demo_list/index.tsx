import React, { FC, useCallback } from "react";
import Card from "../components/card";
import DemoContent from "./components/demoContent"
import { Button } from "antd";
import "./assets/index.less";
import { useFunctions, useUnit } from "../../../redux/unit/hooks";
import { useDispatch } from "react-redux";

const DemoList:FC<{}> = (props) => {
    const dispatch = useDispatch();
    const addItem = useCallback(
        () => dispatch(add()),
        [ dispatch ]
    )
    debugger
    const { add } = useFunctions()();
    const state = useUnit();
    console.log("state",state);
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <div className="demo-container">
            <Button onClick={() => { 
                console.log("jinr")
                addItem();
            }}>这个是:{state}</Button>
            {
                data.map(val => {
                    return <Card key={val} title={val} width="30%" children={<DemoContent />} />
                })
            }
        </div>
    )
}

export default DemoList;