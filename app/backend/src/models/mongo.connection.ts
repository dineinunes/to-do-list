import mongoose from 'mongoose';

export default class MongoConnection {
  static async connect(URI: string):
  Promise<void> {
    await mongoose.connect(URI);
  }
}
