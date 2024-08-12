import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://ih1.redbubble.net/image.1046392278.3346/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg"
  }
}, { timestamps: true });


const User = mongoose.model('User', UserSchema);

export default User