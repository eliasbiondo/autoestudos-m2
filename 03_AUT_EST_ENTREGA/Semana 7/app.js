// Importing all required libraries.
const express = require("express");

// Importing all required files.
const db = require("./database/settings");
const router = require("./routes");

// Instancing app with express.
const app = express();

// Setting up some important server properties.
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Setting up the main api router.
app.use("/api/v1", router);

// Defining the server hostname and port.
const hostname = '127.0.0.1';
const port = 3022;

// Setting up the express static middleware. 
app.use(express.static("./"));

// Setting up the server.
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});