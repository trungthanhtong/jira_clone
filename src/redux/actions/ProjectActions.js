import { CREATE_PROJECT_SAGA } from "../constants/JiraConstants";

export const createProject = (newProject) => ({
    type: CREATE_PROJECT_SAGA,
    newProject
})
