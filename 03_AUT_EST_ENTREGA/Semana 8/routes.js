// Importing all required libraries.
const express = require("express");
const Database = require("sqlite-async");

// Instacing the app router.
const Router = express.Router();

// Create a professional experience
Router.post("/experiencias-profissionais/create", (req, res) => {

    // Getting all required elements from request body.
    const { titulo, local, periodo, descricao } = req.body;

    // Executing the action...
    Database.open(__dirname + '/database/database.db').then(async (db) => {
    const dbList = await db.run(`INSERT INTO Experiencia_profissional("titulo","local","periodo","descricao") VALUES("${titulo}","${local}","${periodo}","${descricao}")`);
    res.send(dbList);
    })
  
})

// Read a specifically professional experience
Router.get("/experiencias-profissionais/:id", (req, res) => {
    
    // Getting the target id from request params.
    const targetId = req.params.id;

    // Executing the action...
    Database.open(__dirname + '/database/database.db').then(async (db) => {
        const dbList = await db.all(`SELECT * FROM Experiencia_profissional WHERE id=${targetId}`);
        res.send(dbList);
    })

})

// Update a specifically professional experience
Router.put("/experiencias-profissionais/:id", (req, res) => {

    // Getting the target id from request params.
    const targetId = req.params.id;

    // Getting all required elements from request body.
    const { titulo, local, periodo, descricao } = req.body;

    // Executing the action...
    Database.open(__dirname + '/database/database.db').then(async (db) => {
    const dbList = await db.run(`UPDATE Experiencia_profissional SET titulo = "${titulo}", local = "${local}", periodo = "${periodo}", descricao = "${descricao}" WHERE id = ${targetId}`);
    res.send(dbList);
    })
  
})

// Delete a specifically professional experience
Router.delete("/experiencias-profissionais/:id", (req, res) => {
    
    // Getting the target id from request params.
    const targetId = req.params.id;

    // Executing the action...
    Database.open(__dirname + '/database/database.db').then(async (db) => {
        const dbList = await db.all(`DELETE FROM Experiencia_profissional WHERE id=${targetId}`);
        res.send(dbList);
    })

})

// Get all professional experiences
Router.get("/experiencias-profissionais", (req, res) => {
  // Executing the action...
  Database.open(__dirname + '/database/database.db').then(async (db) => {
    const dbList = await db.all("SELECT * FROM Experiencia_profissional");
    res.send(dbList);
  })
})

module.exports = Router;