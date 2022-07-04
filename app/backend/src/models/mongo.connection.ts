import mongoose from 'mongoose';

export default class MongoConnection {
  static connect = async (URI: string):
  Promise<void> => {
    await mongoose.connect(URI);
  };
}
