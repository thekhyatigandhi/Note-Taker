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
// POST /api/notes (return new note, add to db.json, return to client, give note unique ID when saved)

router.post("/notes", (req, res) => {
  // title and text for request body
  const { title, text } = req.body;

  // if title and text exist, add unique id
  if (title && test) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    // push new note into notes
    notes.push(newNote);
  }
});
