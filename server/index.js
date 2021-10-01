const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors())

//Rotas////////////////////////////////

//Criar produtos

//get all produtos

//get a produtos

//update a produtos

//update a produtos


app.listen(5000, () => {
    console.log("Servidor rodando...")    
});

