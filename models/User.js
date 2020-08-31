//this builds the collection in the mongo db.  schema defines the max data, but some may not have all... defines a structure.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now  
  }
});

//hook the schema up to mongoose
module.exports = User = mongoose.model('users', UserSchema);

