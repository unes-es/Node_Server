const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var folderTest = new mongoose.Schema({});

//Export the model
module.exports = mongoose.model("folderTest", folderTest);
