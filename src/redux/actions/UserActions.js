import { USER_SIGN_IN_API } from "../constants/JiraConstants";

export const signInAction = (email, password) => {
    return {
        type: USER_SIGN_IN_API,
        userLogin: {
            email,
            password,
        },
    };
};
