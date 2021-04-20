import React from "react";
import { Avatar } from "antd";

export default function MainInfo(props) {

    const {projectDetail} = props;

    const renderAvatar = () => {
        return projectDetail.members?.map((item, index) => {
            return <Avatar key={index}>{item.name[0]}</Avatar>;
        });
    };

    return (
        <>
            <h3>{projectDetail?.projectName}</h3>
            <div className="info" style={{ display: "flex" }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa fa-search" />
                </div>
                <div className="avatar-group" style={{ display: "flex" }}>
                    <Avatar.Group>{renderAvatar()}</Avatar.Group>
                </div>
                <div style={{ marginLeft: 20 }} className="text">
                    Only My Issues
                </div>
                <div style={{ marginLeft: 20 }} className="text">
                    Recently Updated
                </div>
            </div>
        </>
    );
}
