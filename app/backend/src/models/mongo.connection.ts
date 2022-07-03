import mongoose from 'mongoose';

export default class MongoConnection {
  static async connect(URI: string = 'mongodb://localhost:27017/to-do-list') {
    await mongoose.connect(URI);
  }
}
