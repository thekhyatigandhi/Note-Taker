const express = require('express');
const router = express.Router();
const fs = require('fs');
let notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

