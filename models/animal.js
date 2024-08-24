import mongoose from 'mongoose';

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
    type: mongoose.Schema.Types.ObjectId
  },
  dateOfBirth: {
    type: Date
  },
  profilePicture: {
    type: String
  }
});

export default mongoose.model('Animal', animalSchema);