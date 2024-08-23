import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: String,
  hoursTrained: Number,
  owner: Number // id of the animal's owner
});

export default mongoose.model('Animal', animalSchema);