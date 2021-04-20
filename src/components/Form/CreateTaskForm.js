import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { Select, Slider } from "antd";
import { useDispatch, useSelector, connect } from "react-redux";
import { getAllProjects } from "../../redux/actions/ProjectActions";
import {
    createTask,
    getAllPriorityTypes,
    getAllStatusTypes,
    getAllTaskTypes,
} from "../../redux/actions/TaskActions";
import { getUserByProjectID } from "../../redux/actions/UserActions";
import * as Yup from "yup";
import { withFormik } from "formik";
import { setSubmitForm } from "../../redux/actions/DrawerActions";

function CreateTaskForm(props) {
    const { projectList } = useSelector((state) => state.ProjectReducer);
    const { taskTypes, priorityTypes, statusTypes } = useSelector(
        (state) => state.TaskReducer
    );
    const { assignedUsers } = useSelector((state) => state.UserReducer);

    const userOptions = assignedUsers.map((item, index) => {
        return { value: item.userId, label: item.name };
    });

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSubmitForm(handleSubmit))
        dispatch(getAllProjects());
        dispatch(getAllTaskTypes());
        dispatch(getAllPriorityTypes());
        dispatch(getAllStatusTypes());
        if (projectList.length > 0) {
            props.dispatch(getUserByProjectID(projectList[0].id))
        }
    }, []);

    const handleEditorChange = (content, editor) => {
        setFieldValue("description", content);
    };

    const children = [];

    const [size, setSize] = useState("default");

    const [timeTracking, setTimeTracking] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0,
    });

    return (
        <form onSubmit={handleSubmit} className="container create-task-form">
            <div className="form-group">
                <p>Project</p>
                <select
                    name="projectId"
                    className="form-control"
                    onChange={(e) => {
                        const {value} = e.target;
                        dispatch(getUserByProjectID(value));
                        setFieldValue('projectId', value);
                    }}
                >
                    {projectList?.map((project, index) => {
                        return (
                            <option key={index} value={project.id}>
                                {project.projectName}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="form-group">
                <p>Task name</p>
                <input
                    onChange={handleChange}
                    type="text"
                    name="taskName"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-4">
                        <p>Priority</p>
                        <select
                            onChange={handleChange}
                            name="priorityId"
                            className="form-control"
                        >
                            {priorityTypes?.map((item, index) => {
                                return (
                                    <option key={index} value={item.priorityId}>
                                        {item.priority}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-4">
                        <p>Task type</p>
                        <select
                            onChange={handleChange}
                            name="typeId"
                            className="form-control"
                        >
                            {taskTypes?.map((item, index) => {
                                return (
                                    <option key={index} value={item.id}>
                                        {item.taskType}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-4">
                        <p>Status</p>
                        <select
                            onChange={handleChange}
                            name="statusId"
                            className="form-control"
                        >
                            {statusTypes?.map((item, index) => {
                                return (
                                    <option key={index} value={item.statusId}>
                                        {item.statusName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <p>Description</p>
                <Editor
                    apiKey="ghz6w7f3x6gvo3c6cq2ci3ry3chsala0dvke6r7v9nt2pltu"
                    onEditorChange={handleEditorChange}
                    name="description"
                />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                        <p>Assignees</p>
                        <Select
                            mode="multiple"
                            size={size}
                            options={userOptions}
                            placeholder="Please select"
                            style={{ width: "100%" }}
                            optionFilterProp="label"
                            onChange={(values) => {
                                setFieldValue("listUserAssign", values);
                            }}

                        >
                            {children}
                        </Select>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col-12">
                                <p>Original estimate</p>
                                <input
                                    type="number"
                                    defaultValue="0"
                                    min="0"
                                    name="originalEstimate"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <p>Time tracking</p>
                        <Slider
                            defaultValue={timeTracking.timeTrackingSpent}
                            max={
                                Number(timeTracking.timeTrackingSpent) +
                                Number(timeTracking.timeTrackingRemaining)
                            }
                            value={timeTracking.timeTrackingSpent}
                        />
                        <div className="row">
                            <div className="col-6 text-start">
                                {timeTracking.timeTrackingSpent}h logged
                            </div>
                            <div className="col-6 text-end">
                                {timeTracking.timeTrackingRemaining}h remaining
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <p>Time spent</p>
                                <input
                                    type="number"
                                    defaultValue="0"
                                    min="0"
                                    name="timeTrackingSpent"
                                    className="form-control"
                                    onChange={(e) => {
                                        setTimeTracking({
                                            ...timeTracking,
                                            timeTrackingSpent: Number(
                                                e.target.value
                                            ),
                                        });
                                        setFieldValue(
                                            "timeTrackingSpent",
                                            Number(e.target.value)
                                        );
                                    }}
                                />
                            </div>
                            <div className="col-6">
                                <p>Time remaining</p>
                                <input
                                    type="number"
                                    defaultValue="0"
                                    min="0"
                                    name="timeTrackingRemaining"
                                    className="form-control"
                                    onChange={(e) => {
                                        setTimeTracking({
                                            ...timeTracking,
                                            timeTrackingRemaining: Number(
                                                e.target.value
                                            ),
                                        });
                                        setFieldValue(
                                            "timeTrackingRemaining",
                                            Number(e.target.value)
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

const createTaskForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const {projectList, taskTypes, priorityTypes, statusTypes} = props;
        return {
            taskName: "",
            description: "",
            statusId: statusTypes[0]?.statusId,
            originalEstimate: 0,
            timeTrackingSpent: 0,
            timeTrackingRemaining: 0,
            projectId: projectList[0]?.id,
            typeId: taskTypes[0]?.id,
            priorityId: priorityTypes[0]?.priorityId,
            listUserAssign: [],
        };
    },
    // validationSchema: Yup.object().shape({}),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(createTask(values));
    },
    displayName: "Create task form",
})(CreateTaskForm);

const mapStateToProps = (state) => {
    return {
        projectList: state.ProjectReducer.projectList,
        taskTypes: state.TaskReducer.taskTypes,
        priorityTypes: state.TaskReducer.priorityTypes,
        statusTypes: state.TaskReducer.statusTypes
    };
};

export default connect(mapStateToProps)(createTaskForm);
