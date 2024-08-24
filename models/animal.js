import mongoose from 'mongoose';
import UserModel from "../models/user.js";

const animalSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  hoursTrained: {
    required: true,
    type: Number,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    validate: {
      validator: (userId) => UserModel.exists({ _id: userId }),
      message: props => `${props.value} is not a valid User ObjectId!`
    },
  },
  dateOfBirth: {
    type: Date
  },
  profilePicture: {
    type: String
  }
});

export default mongoose.model('Animal', animalSchema);