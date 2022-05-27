const Database = require('sqlite-async');

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS "Experiencia_profissional"(
            id INTEGER NOT NULL,
            titulo TEXT NOT NULL,
            local TEXT NOT NULL,
            periodo TEXT NOT NULL,
            descricao TEXT NOT NULL,
            UNIQUE(titulo),
            PRIMARY KEY(id)
        );
    
        INSERT OR IGNORE INTO Experiencia_profissional("titulo","local","periodo","descricao") VALUES("Monitor de geometria analítica e álgebra linear e instrutor voluntário de pré-cálculo","Universidade Tecnológica Federal do Paraná","Jul 2021 - Set 2021","Atendimento a discentes da disciplina em geral e de engenharia");

        INSERT OR IGNORE INTO Experiencia_profissional("titulo","local","periodo","descricao") VALUES("Auxiliar administrativo","Frango Granjeir","Jan 2018 - Mai 2019","Atendimento ao público e serviços administrativos em geral");
    `)
}

module.exports = Database.open(__dirname + '/database.db').then(execute)