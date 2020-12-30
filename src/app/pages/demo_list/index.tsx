import React, { FC, useEffect, useState } from "react";
import Card from "../components/card";
import DemoContent from "./components/demoContent"
import { Button } from "antd";
import "./assets/index.less";
import { useFunctions, useUnit } from "../../../redux/unit/hooks";

const DemoList: FC<{}> = (props) => {
    const state = useUnit();
    let [cardNum, setCardNum] = useState(Array<number>())

    if(state.number && !cardNum.find(val=> val === state.number)) {
        cardNum.push(state.number);
        setCardNum(cardNum);
    }

    return (
        <div className="demo-container">
            {
                cardNum.map(val => {
                    return <Card key={val} title={val} width="30%" children={<DemoContent />} />
                })
            }
        </div>
    )
}

export default DemoList;