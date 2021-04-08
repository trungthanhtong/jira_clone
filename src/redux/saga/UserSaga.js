import Axios from "axios";
import {
    call,
    delay,
    fork,
    take,
    takeEvery,
    takeLatest,
    put,
    select
} from "redux-saga/effects";
import { ASSIGN_USER_TO_PROJECT_SAGA, GET_ALL_PROJECTS_SAGA, GET_USER_FROM_SEARCH, GET_USER_SAGA, SET_AUTHENTICATION, USER_SIGN_IN_API } from "../constants/JiraConstants";
import { userService } from "../../services/UserServices";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConstants";
import { ACCESS_TOKEN, STATUS_CODE, USER_LOGIN } from "../../util/constants/settingSystem";

function* signIn(action) {
    yield put({
        type: DISPLAY_LOADING,
    });
    yield delay(500);
    try {
        const { data, status } = yield call(() => userService.signIn(action.userLogin));
        localStorage.setItem(ACCESS_TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
        yield put({
            type: SET_AUTHENTICATION,
            user: data.content,
        })
        let {history} = yield select(state => state.HistoryReducer);
        history.push('/')
    } catch (err) {
        console.log(err.response.data);
    }
    yield put({
        type: HIDE_LOADING,
    });
}

function * getUser(action){
    try {
        const {data, status} = yield call(() => userService.getUser(action.keyword));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_USER_FROM_SEARCH,
                users: data.content,
            })
        }
        
    }
    catch(err) {
        console.log(err.response.data);
    }
}

function * assignUserToProject(action) {
    try {
        const {data, status} = yield call(() => userService.assignUserToProject(action.userProject));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PROJECTS_SAGA
            })
        }
    }
    catch(err) {
        console.log(err.response.data);
    }
}

export function* watchingSignIn() {
    yield takeLatest(USER_SIGN_IN_API, signIn);
}

export function * watchingGetUser() {
    yield takeLatest(GET_USER_SAGA, getUser);
}

export function * watchingAssignUserToProject() {
    yield takeLatest(ASSIGN_USER_TO_PROJECT_SAGA, assignUserToProject);
}
