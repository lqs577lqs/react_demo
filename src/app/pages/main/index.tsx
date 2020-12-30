import { Button } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useFunctions, useUnit } from "../../../redux/unit/hooks";
import CircleContainer from "../components/circle_container";
import DemoList from "../demo_list";
import "./assets/index.less"
import { QqOutlined, ZhihuOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const MainPage: FC<{}> = (props) => {
    const { add } = useFunctions()();
    const state = useUnit();

    const linkToContact = (url:string) => {
        window.open(url);
    }

    return (
        <div className="main">
            <div className="main-header">

            </div>
            <div className="main-body">
                <div className="main-body-text white">
                    <span>{`《海贼王剧场版》是根据漫画家尾田荣一郎创作的漫画《航海王》改编的系列动画电影，影片讲述的是主人公“蒙奇·D·路飞”所带领的海贼团的故事。第一部剧场版《海贼王》作品于2000年3月4日在日本上映 [1]  。第13部和第14部剧场版《海贼王》曾引进中国大陆，分别于2016年11月11日和2019年10月18日内地上映 [2-3]  ，最终分别获得1.07亿和2.04亿的票房。`}</span>
                </div>
                <div className="main-body-text">
                    <span>{`《海贼王剧场版》是根据漫画家尾田荣一郎创作的漫画《航海王》改编的系列动画电影，影片讲述的是主人公“蒙奇·D·路飞”所带领的海贼团的故事。第一部剧场版《海贼王》作品于2000年3月4日在日本上映 [1]  。第13部和第14部剧场版《海贼王》曾引进中国大陆，分别于2016年11月11日和2019年10月18日内地上映 [2-3]  ，最终分别获得1.07亿和2.04亿的票房。`}</span>
                </div>
            </div>
            <div className="main-footer">
                <div className="main-footer-contact">
                    <CircleContainer onClick={()=>{linkToContact("http://www.qq.com")}} renderItem={()=> <QqOutlined className="main-footer-contact-icon" style={{ fontSize: 20 }} />}/>
                    <CircleContainer onClick={()=>{linkToContact("http://www.zhihu.com")}} renderItem={()=> <ZhihuOutlined className="main-footer-contact-icon" style={{ fontSize: 20 }} />}/>
                    <CircleContainer onClick={()=>{linkToContact("http://www.github.com")}} renderItem={()=> <GithubOutlined className="main-footer-contact-icon" style={{ fontSize: 20 }} />}/>
                    <CircleContainer onClick={()=>{linkToContact("https://mail.163.com/")}} renderItem={()=> <MailOutlined className="main-footer-contact-icon" style={{ fontSize: 20 }} />}/>
                </div>
                <div className="main-footer-info">
                    
                </div>
                <div className="main-footer-verify">
                    <span>@2021 Leslie</span>
                </div>
            </div>
        </div>
    )
}

export default MainPage;