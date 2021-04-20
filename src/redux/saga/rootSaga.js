import {all} from 'redux-saga/effects';
import * as UserSaga from './UserSaga';
import * as ProjectCategory from './ProjectCategorySaga';
import * as ProjectSaga from './ProjectSaga';
import * as TaskTypeSaga from './TaskTypeSaga';
import * as TaskSaga from './TaskSaga';


export function * rootSaga() {
    yield all([
        UserSaga.watchingSignIn(),
        UserSaga.watchingGetUser(),
        UserSaga.watchingAssignUserToProject(),
        UserSaga.watchingRemoveUserFromProject(),
        UserSaga.watchingGetUserByProjectID(),

        ProjectCategory.watchingAllProjectCatagories(),

        ProjectSaga.watchingCreateProject(),
        ProjectSaga.watchingGetAllProjects(),
        ProjectSaga.watchingUpdateProject(),
        ProjectSaga.watchingDeleteProject(),
        ProjectSaga.watchingGetProjectDetail(),

        TaskTypeSaga.watchingGetAllTaskTypes(),
        TaskTypeSaga.watchingGetAllPriorityTypes(),
        TaskTypeSaga.watchingGetAllStatusTypes(),

        TaskSaga.watchingCreateTask(),
    ])
}