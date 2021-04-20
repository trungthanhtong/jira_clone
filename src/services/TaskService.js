import { BaseService } from "./BaseService";

class TaskService extends BaseService {
    getAllTaskTypes = () => {
        return this.get('TaskType/getAll');
    }

    getAllPriorityTypes = () => {
        return this.get('Priority/getAll');
    }

    getAllStatusTypes = () => {
        return this.get('Status/getAll');
    }

    createTask = (newTask) => {
        return this.post('Project/createTask', newTask)
    }
}

export const taskService = new TaskService();