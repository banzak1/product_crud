const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body


//Rotas////////////////////////////////

//Criar produtos

app.post("/produtos", async(req, res) => {
    try {
        const { name, price, inventory } = req.body;
        const values = [name, price, inventory];
        const newPordutos = await pool.query(
            "INSERT INTO produtos (name, price, inventory) VALUES($1, $2, $3) RETURNING *",
            values 
            
        );
        
        res.json(newPordutos.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all produtos

app.get("/produtos", async (req, res) => {
    try {
        const allProdutos = await pool.query("SELECT * FROM produtos");
        res.json(allProdutos.rows);

    } catch (error) {
        console.error(error.message);
    }
});

//get a produtos

//update a produtos

//update a produtos


app.listen(5000, () => {
    console.log("Servidor rodando...")    
});

