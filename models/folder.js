const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const File = require("./file").schema;

const folderSchema = new Schema(
  {
    number: {
      type: String,
      //required: true,
      //unique: true,
      trim: true,
      //immutable: true,
    },
    title: {
      type: String,
      //required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      //required: true,
      default: "Active",
    },
    progress: {
      type: String,
    },
    files: [File],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Folder", folderSchema);
