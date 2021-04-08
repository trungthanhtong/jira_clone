import { DOMAIN_JIRA } from "../util/constants/settingSystem";
import Axios from "axios";
import { BaseService } from "./BaseService";

class UserService extends BaseService {
    signIn = (userLogin) => {
        return this.post("users/signin", userLogin);
    };

    getUser = (keyword) => {
        return this.get(`Users/getUser?keyword=${keyword}`);
    };

    assignUserToProject = (userProject) => {
        return this.post('Project/assignUserProject', userProject);
    };
}

export const userService = new UserService();
