import TaskModel from '../models/task.model';

export default class TaskService {
  private model: TaskModel;

  constructor() {
    this.model = new TaskModel();
  }
}
