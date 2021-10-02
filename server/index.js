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
});

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

app.get("/produtos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const produtos = await pool.query("SELECT * FROM produtos WHERE id = $1", [id]);

        res.json(produtos.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
});

//update a produtos

app.put("/produtos/:id", async (req, res) => {
    try {
        const values = [req.params.id, req.body.name, req.body.price, req.body.inventory];
        const updateProdutos = await pool.query("UPDATE produtos SET name = $2, price = $3, inventory = $4 WHERE id = $1", values);

        res.json("Produtos atualizados")

    } catch (error) {
        console.log(error.message);
    }
});

//update a produtos


app.listen(5000, () => {
    console.log("Servidor rodando...")    
});

