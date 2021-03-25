/* eslint-disable import/no-anonymous-default-export */
import { USER_LOGIN } from "../../util/constants/settingSystem";
import { SET_AUTHENTICATION } from "../constants/JiraConstants";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    user
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION: {
            return {...state, user: action.user};
        }
    default:
        return {...state}
    }
}
