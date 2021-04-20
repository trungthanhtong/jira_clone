import { ASSIGN_USER_TO_PROJECT, ASSIGN_USER_TO_PROJECT_SAGA, GET_USER_BY_PROJECT_ID_SAGA, GET_USER_SAGA, REMOVE_USER_FROM_PROJECT_SAGA, USER_SIGN_IN_API } from "../constants/JiraConstants";

export const signInAction = (email, password) => {
    return {
        type: USER_SIGN_IN_API,
        userLogin: {
            email,
            password,
        },
    };
};

export const getUser = (keyword) => ({
    type: GET_USER_SAGA,
    keyword
})

export const assignUserToProject = (projectId, userId) => ({
    type: ASSIGN_USER_TO_PROJECT_SAGA,
    userProject: {
        projectId,
        userId
    }
})

export const removeUserFromProject = (projectId, userId) => ({
    type: REMOVE_USER_FROM_PROJECT_SAGA,
    userProject: {
        projectId,
        userId
    }
})

export const getUserByProjectID = (projectID) => ({
    type: GET_USER_BY_PROJECT_ID_SAGA,
    projectID
})

