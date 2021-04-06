import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
    UploadOutlined,
    SearchOutlined,
    PlusOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function Sidebar() {
    const [state, setState] = useState({
        collapsed: true,
    });

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    return (
        <Sider
            trigger={null}
            onMouseEnter={() => toggle()}
            onMouseLeave={() => toggle()}
            collapsible
            collapsed={state.collapsed}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<PlusOutlined />}>
                    Create issue
                </Menu.Item>
                <Menu.Item key="2" icon={<SearchOutlined />}>
                    Search
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>

        // <div className="sideBar">
        //     <div className="sideBar-top">
        //         <div className="sideBar-icon">
        //             <i className="fab fa-jira" />
        //         </div>
        //         <div
        //             className="sideBar-icon"
        //             data-toggle="modal"
        //             data-target="#searchModal"
        //             style={{ cursor: "pointer" }}
        //         >
        //             <i className="fa fa-search" />
        //             <span className="title">SEARCH ISSUES</span>
        //         </div>
        //         <div className="sideBar-icon">
        //             <i className="fa fa-plus" />
        //             <span className="title">CREATE ISSUES</span>
        //         </div>
        //     </div>
        //     <div className="sideBar-bottom">
        //         <div className="sideBar-icon">
        //             <i className="fa fa-question-circle" />
        //             <span className="title">ABOUT</span>
        //         </div>
        //     </div>
        // </div>
    );
}
