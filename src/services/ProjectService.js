import { ACCESS_TOKEN, DOMAIN_JIRA } from "../util/constants/settingSystem";
import Axios from "axios";

export const ProjectService = {
    getAllProjectCategory: () => {
        return Axios({
            url: `${DOMAIN_JIRA}/projectCategory`,
            method: "GET",
        });
    },

    createProject: (newProject) => {
        return Axios({
            url: `${DOMAIN_JIRA}/project/createProject`,
            method: "POST",
            data: newProject,
        });
    },

    createProjectAuthorized: (newProject) => {
        return Axios({
            url: `${DOMAIN_JIRA}/Project/createProjectAuthorize`,
            method: 'POST',
            data: newProject,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    },
};
