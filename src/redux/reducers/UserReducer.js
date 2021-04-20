/* eslint-disable import/no-anonymous-default-export */
import { USER_LOGIN } from "../../util/constants/settingSystem";
import { GET_USER_FROM_SEARCH, SET_ASSIGNED_USERS, SET_AUTHENTICATION } from "../constants/JiraConstants";

let currentUser = {};

if (localStorage.getItem(USER_LOGIN)) {
    currentUser = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    currentUser,
    searchedUsers: [],
    assignedUsers: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION: {
            return {...state, currentUser: action.user};
        }
        case GET_USER_FROM_SEARCH: {
            return {...state, searchedUsers: action.users};
        }
        case SET_ASSIGNED_USERS: {
            return {...state, assignedUsers: action.assignedUsers}
        }
    default:
        return {...state}
    }
}
