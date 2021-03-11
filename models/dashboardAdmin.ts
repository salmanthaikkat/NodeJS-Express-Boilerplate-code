import mongoose from 'mongoose';

const dashboardAdmin = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const Admin = mongoose.model('Admin', dashboardAdmin);
export default Admin;