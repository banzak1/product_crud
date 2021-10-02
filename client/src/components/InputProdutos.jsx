import React, { Fragment, useState } from 'react';
import './InputProdutos.css';

const InputProdutos = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [inventory, setInventory] = useState();

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, price, inventory };
            const response = await fetch("http://localhost:5000/produtos",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Produtos</h1>
            <form className="d-flex flex-column mt-3  align-items-center" onSubmit={onSubmitForm}>
                <input id="name" type="text" className="form-control mt-3 " value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required/>
                <input id="price" type="text" className="form-control mt-3 " value={price} onChange={e => setPrice(e.target.value)} placeholder="Valor do Produto" required/>
                <input id="inventory" type="text" className="form-control mt-3 " value={inventory} onChange={e => setInventory(e.target.value)} placeholder="Quantidade" required/>

                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )
};

export default InputProdutos;