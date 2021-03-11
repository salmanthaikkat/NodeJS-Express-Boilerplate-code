import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.DATABASE_USER_USERNAME}:${process.env.DATABASE_USER_PASSWORD}@cluster0.hia64.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    return connection;
  } catch (e) {
    console.log('error', e);
  }
};
