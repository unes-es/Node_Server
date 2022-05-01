const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var folderEvent = new mongoose.Schema(
  {
    event: {
      type: String,
      immutable: true,
    },
    data: {
      type: Object,
    },
    folderId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("folderEvent", folderEvent);
