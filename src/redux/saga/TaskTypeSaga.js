import { takeLatest, call, put } from "@redux-saga/core/effects";
import { taskService } from "../../services/TaskService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { GET_ALL_PRIORITY_TYPES_SAGA, GET_ALL_STATUS_TYPES_SAGA, GET_ALL_TASK_TYPES_SAGA, SET_ALL_PRIORITY_TYPES, SET_ALL_STATUS_TYPES, SET_ALL_TASK_TYPES } from "../constants/JiraConstants";

function * getAllTaskTypes() {
    try {
        const {data, status} = yield call(() => taskService.getAllTaskTypes())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({type: SET_ALL_TASK_TYPES, taskTypes: data.content})
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
}

function * getAllPriorityTypes() {
    try {
        const {data, status} = yield call(() => taskService.getAllPriorityTypes())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({type: SET_ALL_PRIORITY_TYPES, priorityTypes: data.content})
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
}

function * getAllStatusTypes() {
    try {
        const {data, status} = yield call(() => taskService.getAllStatusTypes())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({type: SET_ALL_STATUS_TYPES, statusTypes: data.content})
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
}

export function * watchingGetAllTaskTypes() {
    yield takeLatest(GET_ALL_TASK_TYPES_SAGA, getAllTaskTypes);
}

export function * watchingGetAllPriorityTypes() {
    yield takeLatest(GET_ALL_PRIORITY_TYPES_SAGA, getAllPriorityTypes);
}

export function * watchingGetAllStatusTypes() {
    yield takeLatest(GET_ALL_STATUS_TYPES_SAGA, getAllStatusTypes);
}