import { CREATE_TASK_SAGA, GET_ALL_PRIORITY_TYPES_SAGA, GET_ALL_STATUS_TYPES_SAGA, GET_ALL_TASK_TYPES_SAGA } from "../constants/JiraConstants";

export const getAllTaskTypes = () => ({
    type: GET_ALL_TASK_TYPES_SAGA,
})

export const getAllPriorityTypes = () => ({
    type: GET_ALL_PRIORITY_TYPES_SAGA,
})

export const getAllStatusTypes = () => ({
    type: GET_ALL_STATUS_TYPES_SAGA
})

export const createTask = (newTask) => ({
    type: CREATE_TASK_SAGA,
    newTask
})
