var express = require("express");
var router = express.Router();

const Folder = require("../models/folder");

router.get("/", function (req, res, next) {
  Folder.find()
    .then((folders) => res.json(folders))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res, next) => {
  const newFolder = new Folder(req.body.folder);
  newFolder
    .save()
    .then(() => res.json({ folder: newFolder }))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update", (req, res, next) => {
  const _folder = req.body.folder;
  Folder.findById(_folder.id)
    .then((folder) => {
      folder.number = _folder.number;
      folder.title = _folder.title;
      folder.date = _folder.date;
      folder.status = _folder.status;
      folder.progress = _folder.progress;
      folder.files = _folder.files;
      folder
        .save()
        .then(() => res.json({ folder: folder }))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
