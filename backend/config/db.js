import mongoose from 'mongoose';

export async function connectToDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected: ', conn.connection.host);
  } catch (error) {
    console.error('Error connecting to mongoDB:', error);
    process.exit(1);
  }
}