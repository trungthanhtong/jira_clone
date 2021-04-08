import { takeLatest, call, put, delay, select } from "@redux-saga/core/effects";
import { projectService } from "../../services/ProjectService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { CREATE_PROJECT_SAGA, DELETE_PROJECT_SAGA, GET_ALL_PROJECTS, GET_ALL_PROJECTS_SAGA, UPDATE_PROJECT_SAGA } from "../constants/JiraConstants";
import {DISPLAY_LOADING, HIDE_LOADING} from '../constants/LoadingConstants'
import notification from '../../util/Notification/notification'

function * createProject(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const {data, status} = yield call(() => projectService.createProjectAuthorized(action.newProject));
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
        const {data, status} = yield call(() => projectService.getAllProjects())
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
        const {data, status} = yield call(() => projectService.updateProject(action.editedProject));
        console.log(status, data);
        if (status === STATUS_CODE.SUCCESS) {
            yield put({type: GET_ALL_PROJECTS_SAGA})
            notification('success', 'Project updated.')
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })
}


function * deleteProject(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const {data, status} = yield call(() => projectService.deleteProject(action.project));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({type: GET_ALL_PROJECTS_SAGA});
            notification('success', 'The project is deleted')
        }
    }
    catch(err) {
        console.log(err.response.data);
        notification('error', 'Action failed.')
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

export function * watchingDeleteProject() {
    yield takeLatest(DELETE_PROJECT_SAGA, deleteProject);
}