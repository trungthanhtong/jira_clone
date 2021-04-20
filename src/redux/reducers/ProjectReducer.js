/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_PROJECTS, SET_EDITED_PROJECT, SET_PROJECT_DETAIL } from "../constants/JiraConstants"

const initialState = {
    projectList: [],
    editedProject: {
        id: 0,
        projectName: '',
        creator: '',
        description: '',
        categoryID: '2',
    },
    projectDetail: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS: {
            return {...state, projectList: [...action.projectList]}
        }
        case SET_EDITED_PROJECT: {
            return {...state, editedProject: action.editedProject}
        }
        case SET_PROJECT_DETAIL: {
            return {...state, projectDetail: action.projectDetail}
        }

    default:
        return {...state}
    }
}
