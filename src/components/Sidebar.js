import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
    UploadOutlined,
    SearchOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { openDrawer } from "../redux/actions/DrawerActions";
import CreateTaskForm from "./Form/CreateTaskForm";

const { Header, Sider, Content } = Layout;

export default function Sidebar() {

    const dispatch = useDispatch();

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
                <Menu.Item onClick={() => {
                    dispatch(openDrawer('Create task', <CreateTaskForm/>))
                }} key="1" icon={<PlusOutlined />}>
                    Create task
                </Menu.Item>
                <Menu.Item key="2" icon={<SearchOutlined />}>
                    Search
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>

    
    );
}
