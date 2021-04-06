import React, { useEffect, useState } from "react";
import { Table, Button, Space, Tag } from "antd";
import ReactHTMLParser from 'react-html-parser';
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from 'react-redux';
import {getAllProjects, setEditedProject} from '../../redux/actions/ProjectActions'
import { OPEN_DRAWER } from "../../redux/constants/DrawerConstants";



export default function ProjectManagement(props) {

    const {projectList} = useSelector(state => state.ProjectReducer)

    const dispatch = useDispatch()

    useEffect(() => {  
        dispatch(getAllProjects())
    }, [])

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
                return a.id - b.id
            },
            sortDirections: ['descend']
        },
        {
            title: "Project Name",
            dataIndex: "projectName",
            key: "projectName",
            sorter: (a, b) => {
                const projectName1 = a.projectName.trim().toLowerCase();
                const projectName2 = b.projectName.trim().toLowerCase();
                return projectName1 > projectName2 ? -1 : 1;
            }
        },
        // {
        //     title: "Description",
        //     dataIndex: "description",
        //     key: "description",
        //     render: (text, record, index) => {
        //         let jsxContent = ReactHTMLParser(text);
        //         return <>
        //             {jsxContent}
        //         </>
        //     }
        // },
        {
            title: "Category",
            dataIndex: 'categoryName',
            key: 'CategoryName'
        },
        {
            title: "Creator",
            dataIndex: 'creator',
            key: 'creator',
            render: (text, record, index) => {
                return <Tag color="green">
                    {text.name}
                </Tag>
            }
        },
        {
            title: "Action",
            dataIndex: 'action',
            key: 'action',
            render: (text, record, index) => {
                return <Space size="middle">
                    <button onClick={() => {
                        dispatch({type: OPEN_DRAWER})
                        dispatch(setEditedProject(record))
                    }} className="btn btn-outline-primary"><EditOutlined /></button>
                    <button className="btn btn-outline-danger"><DeleteOutlined /></button>
                </Space>
            } 
        }
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
                rowKey={'id'}
                pagination={{pageSize:10}}
            />
        </div>
        </div>
    );
}
