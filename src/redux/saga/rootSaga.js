import {all} from 'redux-saga/effects';
import * as UserSaga from './UserSaga';
import * as ProjectCategory from './ProjectCategorySaga';
import * as ProjectSaga from './ProjectSaga';


export function * rootSaga() {
    yield all([
        UserSaga.watchingSignIn(),
        UserSaga.watchingGetUser(),
        UserSaga.watchingAssignUserToProject(),

        ProjectCategory.watchingAllProjectCatagories(),
        ProjectSaga.watchingCreateProject(),
        ProjectSaga.watchingGetAllProjects(),
        ProjectSaga.watchingUpdateProject(),
        ProjectSaga.watchingDeleteProject(),
    ])
}