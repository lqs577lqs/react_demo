import React, { FC, useEffect, useState } from "react";
import RouterConfig from "../..";
import "./assets/index.less"

const HomePage:FC<{}> = (props) => {
    const [isGuideTop,setIsGuideTop] = useState(true);

    /**
     * @function: 监听纵向滚动条
     * @author: Leslie
     */
    const scrolling = () => {
        console.log('window',window.scrollY);
        if(window.scrollY === 0 || window.scrollY < 10) {
            setIsGuideTop(true);
            return;
        }
        setIsGuideTop(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll",scrolling);
    },[]);

    return  <div>
                <div className={isGuideTop?"home-guide top":"home-guide"}>
                    <div className="home-guide-content">
                        <span className="home-guide-content-title home">首页</span>
                        <span className="home-guide-content-title">第一项</span>
                        <span className="home-guide-content-title">第二项</span>
                        <span className="home-guide-content-title">第三项</span>
                        <span className="home-guide-content-title">第四项</span>
                        <span className="home-guide-content-title">第五项</span>
                    </div>
                </div>
                {/* <div className="home-content"> */}
                    <RouterConfig />
                {/* </div> */}
            </div>
}

export default HomePage;