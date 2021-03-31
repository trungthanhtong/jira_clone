import {all} from 'redux-saga/effects';
import * as UserSaga from './UserSaga';
import * as ProjectCategory from './ProjectCategorySaga';
import * as ProjectSaga from './ProjectSaga';


export function * rootSaga() {
    yield all([
        UserSaga.watchingSignIn(),
        ProjectCategory.watchingAllProjectCatagories(),
        ProjectSaga.watchingCreateProject(),
    ])
}