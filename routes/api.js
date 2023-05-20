const express = require("express");
const router = express.Router();
const fs = require("fs");
let notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

// GET /api/notes (return db.json)
router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (title && test) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
  }
});
