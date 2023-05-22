const express = require("express");
const router = express.Router();

const path = require("path");
// node:path module provides utilities for working with file and directory paths

// GET method to return index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../routes/public/index.html"));
});

// GET method to return notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/notes.html"));
});

module.exports = router;
