import { takeLatest, call, put, delay, select } from "@redux-saga/core/effects";
import { ProjectService } from "../../services/ProjectService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { CREATE_PROJECT_SAGA, GET_ALL_PROJECTS, GET_ALL_PROJECTS_SAGA, UPDATE_PROJECT_SAGA } from "../constants/JiraConstants";
import {DISPLAY_LOADING, HIDE_LOADING} from '../constants/LoadingConstants'

function * createProject(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const {data, status} = yield call(() => ProjectService.createProjectAuthorized(action.newProject));
        if (status === STATUS_CODE.SUCCESS) {
            const {history} = yield select(state => state.HistoryReducer);
            history.push('/board');
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })
}

function * getAllProjects() {
    try {
        const {data, status} = yield call(() => ProjectService.getAllProjects())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PROJECTS,
                projectList: data.content,
            })
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
}

function * updateProject(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const {data, status} = yield call(() => ProjectService.updateProject(action.editedProject));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({type: GET_ALL_PROJECTS_SAGA})
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })
}



export function * watchingCreateProject() {
    yield takeLatest(CREATE_PROJECT_SAGA, createProject);
}

export function * watchingGetAllProjects() {
    yield takeLatest(GET_ALL_PROJECTS_SAGA, getAllProjects);
}

export function * watchingUpdateProject() {
    yield takeLatest(UPDATE_PROJECT_SAGA, updateProject);
}