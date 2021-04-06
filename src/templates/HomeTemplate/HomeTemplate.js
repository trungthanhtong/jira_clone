import React from "react";
import { Route } from "react-router-dom";
import Menu from "../../components/Menu";
import Sidebar from "../../components/Sidebar";
import "../../index.css";
import Modal from "../../components/Modals/Modal";
import { Layout } from "antd";

export const HomeTemplate = (props) => {
    let { Component, ...restRoute } = props;
    return (
        <Route
            {...restRoute}
            render={(propsRoute) => {
                return (
                    <div className="jira">
                        <Sidebar />
                        <Menu />
                        <Component {...propsRoute} />
                        <Modal />
                    </div>
                );
            }}
        />
    );
};
