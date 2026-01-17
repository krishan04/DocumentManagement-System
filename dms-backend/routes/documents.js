const express = require("express");
const multer = require("multer");
const Document = require("../models/Document");

const router = express.Router();

// file storage
const upload = multer({ dest: "uploads/" });

// UPLOAD DOCUMENT
router.post("/upload", upload.single("file"), async (req, res) => {
  const { title, tags, owner } = req.body;

  const doc = await Document.create({
    title,
    tags: tags.split(","),
    filePath: req.file.path,
    owner,
    version: 1
  });

  res.json(doc);
});

// GET ALL DOCUMENTS
router.get("/", async (req, res) => {
  const docs = await Document.find();
  res.json(docs);
});

// SEARCH DOCUMENTS BY TITLE OR TAG
router.get("/search", async (req, res) => {
  const q = req.query.q || "";

  const docs = await Document.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { tags: { $regex: q, $options: "i" } }
    ]
  });

  res.json(docs);
});

// UPDATE DOCUMENT (OWNER ONLY + VERSION CONTROL)
router.put("/:id", async (req, res) => {
  const { title, owner } = req.body;

  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).send("Not found");

  // permission check
  if (doc.owner !== owner) {
    return res.status(403).send("Permission denied");
  }

  doc.title = title || doc.title;
  doc.version += 1;
  await doc.save();

  res.json(doc);
});



module.exports = router;