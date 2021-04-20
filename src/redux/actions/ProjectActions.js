import { CREATE_PROJECT_SAGA, DELETE_PROJECT_SAGA, GET_ALL_PROJECTS_SAGA, GET_PROJECT_DETAIL_SAGA, SET_EDITED_PROJECT, UPDATE_PROJECT_SAGA } from "../constants/JiraConstants";

export const createProject = (newProject) => ({
    type: CREATE_PROJECT_SAGA,
    newProject
})

export const getAllProjects = () => ({
    type: GET_ALL_PROJECTS_SAGA
})

export const setEditedProject = (editedProject) => ({
    type: SET_EDITED_PROJECT,
    editedProject,
})

export const updateProject = (editedProject) => ({
    type: UPDATE_PROJECT_SAGA,
    editedProject
})

export const deleteProject = (project) => ({
    type: DELETE_PROJECT_SAGA,
    project,
})

export const getProjectDetail = (projectID) => ({
    type: GET_PROJECT_DETAIL_SAGA,
    projectID
})


