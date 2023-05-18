// include express
const express = require("express");
const app = express();

//defining port
const PORT = process.env.PORT || 3001;

// middleware for parsing JSON and urlencode form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// html/api routers

// link routes to path

// port check
