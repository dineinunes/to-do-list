import TaskService from '../services/task.service';

export default class TaskController {
  private service: TaskService;

  constructor() {
    this.service = new TaskService();
  }
}
