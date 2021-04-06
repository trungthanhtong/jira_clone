/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_PROJECTS, SET_EDITED_PROJECT } from "../constants/JiraConstants"

const initialState = {
    projectList: [],
    editedProject: {
        id: 0,
        projectName: '',
        creator: '',
        description: '<h1>hello</h1>',
        categoryID: '2',
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS: {
            return {...state, projectList: [...action.projectList]}
        }
        case SET_EDITED_PROJECT: {
            return {...state, editedProject: action.editedProject}
        }
    

    default:
        return {...state}
    }
}
