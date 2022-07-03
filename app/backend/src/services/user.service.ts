import UserModel from '../models/user.model';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }
}
