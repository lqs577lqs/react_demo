import React, { FC } from "react";
import { useUnit } from "../../../redux/unit/hooks";
import "./assets/index.less"
const HomePage:FC<{}> = (props) => {
    const state = useUnit();
    console.log('state',state);

    return  <div className="home-page">
                <div className="home-guide">

                </div>
                <div className="home-content">
                    {state.number}
                </div>
            </div>
}

export default HomePage;