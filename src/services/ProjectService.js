import { ACCESS_TOKEN, DOMAIN_JIRA } from "../util/constants/settingSystem";
import Axios from "axios";
import { BaseService } from "./BaseService";

class ProjectService extends BaseService {

    constructor(){
        super();
    }

    getAllProjectCategory = () => {
        return this.get('projectCategory');
    }

    createProject = (newProject) => {
        return this.post('project/createProject', newProject);
    }

    createProjectAuthorized = (newProject) => {
        return this.post('Project/createProjectAuthorize', newProject);
    }

    getAllProjects = () => {
        return this.get('Project/getAllProject');
    }

    updateProject = (editedProject) => {
        return this.put(`Project/updateProject?projectID=${editedProject.id}`, editedProject);
    }

    deleteProject = (project) => {
        return this.delete(`Project/deleteProject?projectId=${project.id}`);
    }

    getProjectDetail = (projectID) => {
        return this.get(`Project/getProjectDetail?id=${projectID}`);
    }
};


export const projectService = new ProjectService();