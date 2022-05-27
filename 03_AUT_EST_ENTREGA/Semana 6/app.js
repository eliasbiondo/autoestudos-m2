// Importing all required libraries.
const express = require("express");
const Database = require("sqlite-async");

// Importing all required files.
const db = require("./database/settings");

// Instancing app with express.
const app = express();

// Instacing the app router.
const Router = express.Router();

Router.get("/experiencias-profissionais", (req, res) => {
  // Executing the action...
  Database.open(__dirname + '/database/database.db').then(async (db) => {
    const dbList = await db.all("SELECT * FROM Experiencia_profissional");
    res.send(dbList);
  })
})

app.use("/api/v1",Router);

// Defining the server hostname and port.
const hostname = '127.0.0.1';
const port = 3022;

// Setting up the express static middleware. 
app.use(express.static("./"));

// Setting up the server.
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});