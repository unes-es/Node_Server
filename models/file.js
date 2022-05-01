const mongoose = require("mongoose"); // Erase if already required

var fileSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  file: {
    type: Buffer,
    //required: true,
  },
  fileType: {
    type: String,
    //required: true,
  },
  progress: {
    type: String,
    //required: true,
  },
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("File", fileSchema);
