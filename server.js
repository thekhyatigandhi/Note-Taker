// including express
const express = require("express");
const app = express();

// defining the port - local port 3001 and port for heroku
const PORT = process.env.PORT || 3001;

// applying middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// require html/api routers
const htmlRouter = require("./routes/html.js");
const apiRouter = require("./routes/api.js");

// link routes to path
app.use(htmlRouter);
app.use("/api", apiRouter);

// port check
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
