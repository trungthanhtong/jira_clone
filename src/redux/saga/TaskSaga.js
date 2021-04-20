import { takeLatest, call, put } from "@redux-saga/core/effects";
import { taskService } from "../../services/TaskService";
import { CREATE_TASK_SAGA } from "../constants/JiraConstants";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConstants";
import notification from '../../util/Notification/notification'
import { STATUS_CODE } from "../../util/constants/settingSystem";

function * createTask(action) {
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        const {data, status} = yield call(() => taskService.createTask(action.newTask));
        if (status === STATUS_CODE.SUCCESS) {
            notification('success', 'Task is created.');
        }
    }
    catch(err) {
        console.log(err.response.data);
        notification('error', err.response.data.content);
    }
    yield put({type: HIDE_LOADING})
}

export function * watchingCreateTask() {
    yield takeLatest(CREATE_TASK_SAGA, createTask);
}