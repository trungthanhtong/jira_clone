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

    removeUserFromProject = (userProject) => {
        return this.post('Project/removeUserFromProject', userProject);
    }

    getUserByProjectID = (projectID) => {
        return this.get(`Users/getUserByProjectId?idProject=${projectID}`)
    }
}

export const userService = new UserService();
