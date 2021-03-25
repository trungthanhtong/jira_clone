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
import { SET_AUTHENTICATION, USER_SIGN_IN_API } from "../constants/JiraConstants";
import { UserService } from "../../services/UserServices";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConstants";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/constants/settingSystem";

function* signIn(action) {
    yield put({
        type: DISPLAY_LOADING,
    });
    yield delay(500);
    try {
        const { data, status } = yield call(() => UserService.signIn(action.userLogin));
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

export function* watchingSignIn() {
    yield takeLatest(USER_SIGN_IN_API, signIn);
}
