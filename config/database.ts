import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("http://localhost:8000", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
