import React, { useEffect, useRef, useState } from "react";
import {
    Table,
    Button,
    Space,
    Tag,
    Popconfirm,
    Avatar,
    Popover,
    AutoComplete,
} from "antd";
import ReactHTMLParser from "react-html-parser";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteProject,
    getAllProjects,
    setEditedProject,
} from "../../redux/actions/ProjectActions";
import { OPEN_DRAWER } from "../../redux/constants/DrawerConstants";
import {
    assignUserToProject,
    getUser,
    removeUserFromProject,
} from "../../redux/actions/UserActions";
import {NavLink} from 'react-router-dom';
import { openDrawer } from "../../redux/actions/DrawerActions";
import EditProjectForm from "../../components/Form/EditProjectForm";


export default function ProjectManagement(props) {
    const { projectList } = useSelector((state) => state.ProjectReducer);

    const dispatch = useDispatch();

    const { searchedUsers } = useSelector((state) => state.UserReducer);

    const searchRef = useRef(null);

    const [value, setValue] = useState("");

    const confirm = (project) => {
        dispatch(deleteProject(project));
    };

    useEffect(() => {
        dispatch(getAllProjects());
    }, []);

    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });

    const handleChange = (pagination, filters, sorter) => {
        // console.log("Various parameters", pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: "descend",
                columnKey: "age",
            },
        });
    };

    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => {
                return a.id - b.id;
            },
            sortDirections: ["descend"],
        },
        {
            title: "Project Name",
            dataIndex: "projectName",
            key: "projectName",
            render: (text, record, index) => {
                return <NavLink to={`/board/${record.id}`}>{text}</NavLink>
            },
            sorter: (a, b) => {
                const projectName1 = a.projectName.trim().toLowerCase();
                const projectName2 = b.projectName.trim().toLowerCase();
                return projectName1 > projectName2 ? -1 : 1;
            },
        },
        {
            title: "Category",
            dataIndex: "categoryName",
            key: "CategoryName",
        },
        {
            title: "Creator",
            dataIndex: "creator",
            key: "creator",
            render: (text, record, index) => {
                return <Tag color="green">{text.name}</Tag>;
            },
        },
        {
            title: "Members",
            dataIndex: "members",
            key: "members",
            render: (text, record, index) => {
                return (
                    <Popover
                        placement="top"
                        title="Members"
                        content={() => {
                            return (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Avatar</th>
                                            <th>Name</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {text?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.userId}</td>
                                                    <td>
                                                        <Avatar
                                                            src={item.avatar}
                                                        ></Avatar>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    removeUserFromProject(
                                                                        record.id,
                                                                        item.userId
                                                                    )
                                                                )
                                                            }
                                                            className="btn btn-outline-danger"
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            );
                        }}
                    >
                        <Space>
                            <Avatar.Group
                                maxCount={2}
                                maxStyle={{
                                    color: "#f56a00",
                                    backgroundColor: "#fde3cf",
                                }}
                            >
                                {text?.map((item, index) => {
                                    return (
                                        <Avatar
                                            key={index}
                                            style={{
                                                backgroundColor: "#f56a00",
                                            }}
                                        >
                                            {item.name[0]}
                                        </Avatar>
                                    );
                                })}
                                <Popover
                                    placement="top"
                                    title={"Add user"}
                                    content={() => {
                                        return (
                                            <AutoComplete
                                                style={{ width: 200 }}
                                                placeholder="User's name"
                                                value={value}
                                                onChange={(text) =>
                                                    setValue(text)
                                                }
                                                onSelect={(value, option) => {
                                                    setValue(option.label);
                                                    dispatch(
                                                        assignUserToProject(
                                                            record.id,
                                                            value
                                                        )
                                                    );
                                                }}
                                                onSearch={(value) => {
                                                    if (searchRef.current) {
                                                        clearTimeout(
                                                            searchRef.current
                                                        );
                                                    }
                                                    searchRef.current = setTimeout(
                                                        () => {
                                                            dispatch(
                                                                getUser(value)
                                                            );
                                                        },
                                                        300
                                                    );
                                                }}
                                                options={searchedUsers?.map(
                                                    (user, index) => ({
                                                        label: user.name,
                                                        value: user.userId.toString(),
                                                    })
                                                )}
                                            />
                                        );
                                    }}
                                    trigger="click"
                                >
                                    <Avatar
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#52c41a",
                                        }}
                                    >
                                        +
                                    </Avatar>
                                </Popover>
                            </Avatar.Group>
                        </Space>
                    </Popover>
                );
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record, index) => {
                return (
                    <Space size="middle">
                        <button
                            onClick={() => {
                                dispatch(openDrawer('Edit Project', <EditProjectForm/>));
                                dispatch(setEditedProject(record));
                            }}
                            className="btn btn-outline-primary"
                        >
                            <EditOutlined />
                        </button>
                        <Popconfirm
                            placement="topRight"
                            title="Are you sure to delete this project?"
                            onConfirm={() => confirm(record)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <button className="btn btn-outline-danger">
                                <DeleteOutlined />
                            </button>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];

    return (
        <div className="w-75">
            <div className="container mt-4 my-0">
                <h3>Project Management</h3>
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={setAgeSort}>Sort age</Button>
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button onClick={clearAll}>
                        Clear filters and sorters
                    </Button>
                </Space>
                <Table
                    columns={columns}
                    dataSource={projectList}
                    onChange={handleChange}
                    rowKey={"id"}
                    pagination={{ pageSize: 8 }}
                />
            </div>
        </div>
    );
}
