import mongoose from 'mongoose';
/*
```
User {
  _id: ObjectId // user's ID
  firstName: string // user's first name
  lastName: string // user's last name
  email: string // user's email
  password: string // user's password used only in level 3 and beyond
  profilePicture?: string // pointer to user's profile picture in cloud storage --> used in Expert level
}
```
*/
const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  // password: String,
  profilePicture: {
    type: String,
  }
});

export default mongoose.model('User', userSchema);