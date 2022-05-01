var express = require("express");
var router = express.Router();

const FolderEvent = require("../models/folderEvent");
const Folder = require("../models/folderTest");

router.get("/", function (req, res, next) {
  FolderEvent.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/event/:id", function (req, res, next) {
  FolderEvent.find({ folderId: req.params.id })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res, next) => {
  var folderId = "";
  const eventData = req.body.event;
  if (eventData.event === "Created" || eventData.data.id === "0") {
    const newFolder = new Folder();
    folderId = newFolder._id.toString();
  } else {
    folderId = eventData.folderId;
  }
  eventData.data.id = folderId;
  const newEvent = new FolderEvent({
    ...eventData,
    folderId: folderId,
  });
  newEvent
    .save()
    .then(() => res.json({ event: newEvent }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
