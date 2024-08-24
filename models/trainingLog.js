import mongoose from 'mongoose';
import UserModel from "../models/user.js";
import AnimalModel from "../models/animal.js";

const trainingLogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  animal: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    validate: {
      validator: (animalId) => AnimalModel.exists({ _id: animalId }),
      message: props => `${props.value} is not a valid Animal ObjectId!`
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    validate: {
      validator: (userId) => UserModel.exists({ _id: userId }),
      message: props => `${props.value} is not a valid User ObjectId!`
    },
  },
  trainingLogVideo: {
    type: String,
  }
});

export default mongoose.model('TrainingLog', trainingLogSchema);