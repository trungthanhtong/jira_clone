/* eslint-disable import/no-anonymous-default-export */
import { SET_ALL_PRIORITY_TYPES, SET_ALL_STATUS_TYPES, SET_ALL_TASK_TYPES } from "../constants/JiraConstants"

const initialState = {
    taskTypes: [],
    priorityTypes: [],
    statusTypes: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_TASK_TYPES: {
            return {...state, taskTypes: action.taskTypes}
        }
        case SET_ALL_PRIORITY_TYPES: {
            return {...state, priorityTypes: action.priorityTypes}
        }
        case SET_ALL_STATUS_TYPES: {
            return {...state, statusTypes: action.statusTypes}
        }

    default:
        return {...state}
    }
}
