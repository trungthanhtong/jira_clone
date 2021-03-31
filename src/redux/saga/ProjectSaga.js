import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { ProjectService } from "../../services/ProjectService";
import { CREATE_PROJECT_SAGA } from "../constants/JiraConstants";
import {DISPLAY_LOADING, HIDE_LOADING} from '../constants/LoadingConstants'

function * createProject(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const {data, status} = yield call(() => ProjectService.createProjectAuthorized(action.newProject));
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