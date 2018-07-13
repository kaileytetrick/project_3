var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userListSchema = new Schema({
  title: String,
  body: String
});

var UserList = mongoose.model("Note", userListSchema);

module.exports = UserList;
