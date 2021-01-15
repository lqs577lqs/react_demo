import { Button } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useFunctions, useUnit } from "../../../redux/unit/hooks";
import CircleContainer from "../components/circle_container";
import DemoList from "../demo_list";
import "./assets/index.less"
import { QqOutlined, ZhihuOutlined, GithubOutlined, MailOutlined,RightCircleOutlined } from '@ant-design/icons';
import Card from "../components/card";

const MainPage: FC<{}> = (props) => {
    const { add } = useFunctions()();
    const state = useUnit();

    const linkToContact = (url:string) => {
        window.open(url);
    }

    /**
     * @function: 获取git信息
     * @author: Leslie
     */
    const getGitInfo = () => {
        return [{
            name: "reactDemo",
            url: "https://github.com/lqs577lqs/react_demo",
            render: (<span>reactDemo</span>)
        },{
            name: "webPro",
            url: "https://github.com/lqs577lqs/web.pro",
            render: (<span>webPro</span>)
        },{
            name: "个人项目",
            url: "https://github.com/lqs577lqs/reaoniss",
            render: (<span>个人项目</span>)
        },{
            name: "test",
            url: "http://www.baidu.com",
            render: (<span>test</span>)
        }]
    }



    return (
        <div className="main">
            <div className="main-header">

            </div>
            <div className="main-body">
                <div className="main-body-text white">
                    <span className="main-body-text-content">{`雷钦淞（Leslie），家乡在四川泸州，毕业于成都理工大学，专业是数字媒体技术。主要兴趣为web开发，曾从事Java开发并完成国家电网web端管理系统-物资调配项目,以及国家电网web端管理系统-非招标管理项目。后对web前端开发产生兴趣专攻web前端，熟悉运用Jquery,Vue,React框架进行项目开发，在开发过程中熟练掌握js，ts，jsx，tsx等语言，同时熟练掌握webpack项目打包管理。在转为web前端开发后参与公司产品Nebula、Proxima开发，参与水井坊、老白干、冈本等B端管理系统开发，参与劲酒小程序C端项目开发。`}</span>
                </div>
                <div className="main-body-text">
                    <div className="main-body-git">
                        <div className="main-body-git-header">
                            <h1>GIT</h1>
                            <RightCircleOutlined onClick={()=>{linkToContact("http://www.github.com")}}/>
                        </div>
                        <div className="main-body-git-card">
                            {
                                getGitInfo().map(val => {
                                    return <Card onClick={()=>{window.open(val.url)}} key={val.name} title={null} width="100%" children={val.render} />
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="main-body-text white">
                    <span className="wating">开发中。。。</span>
                </div>
                <div className="main-body-text">
                    <span className="wating">开发中。。。</span>
                </div> */}
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