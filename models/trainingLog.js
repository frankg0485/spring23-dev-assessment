import mongoose from 'mongoose';

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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  trainingLogVideo: {
    type: String,
  }
});

export default mongoose.model('TrainingLog', trainingLogSchema);