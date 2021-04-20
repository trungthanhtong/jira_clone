import React from "react";

export default function MainContent(props) {

    const {projectDetail} = props;

    const renderTaskList = () => {
        return projectDetail.lstTask?.map((item, index) => {
            return  <div key={index} className="card" style={{ width: "17rem", height: "25rem" }}>
            <div className="card-header">BACKLOG 3</div>
            <ul className="list-group list-group-flush">
                <li
                    className="list-group-item"
                    data-bs-toggle="modal"
                    data-bs-target="#infoModal"
                    style={{ cursor: "pointer" }}
                >
                    <p>
                        Each issue has a single reporter but can have
                        multiple assignees
                    </p>
                    <div className="block" style={{ display: "flex" }}>
                        <div className="block-left">
                            <i className="fa fa-bookmark" />
                            <i className="fa fa-arrow-up" />
                        </div>
                        <div className="block-right">
                            <div
                                className="avatar-group"
                                style={{ display: "flex" }}
                            >
                                <div className="avatar">
                                    <img
                                        src={require('../../assets/img/download (1).jfif').default}
                                        alt="download 1"
                                    />
                                </div>
                                <div className="avatar">
                                    <img
                                        src={require('../../assets/img/download (2).jfif').default}
                                        alt="download 2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
        })
    }

    return (
        <div className="content" style={{ display: "flex" }}>
           {renderTaskList()}
        </div>
    );
}
