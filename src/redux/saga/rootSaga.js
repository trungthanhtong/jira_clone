import {all} from 'redux-saga/effects';
import * as UserSaga from './UserSaga'


export function * rootSaga() {
    yield all([
        UserSaga.watchingSignIn(),
    ])
}