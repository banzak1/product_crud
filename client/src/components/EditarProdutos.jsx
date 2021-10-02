import React, { Fragment, useState} from 'react';

const EditarProdutos = ({produtos}) => {
    const [name, setName] = useState(produtos.name);
    const [price, setPrice] = useState(produtos.price);
    const [inventory, setInventory] = useState(produtos.inventory);


    //editar descrições ods produtos

    const updateProdutos = async (e) => {
        e.preventDefault();
        try {
            const body = { name, price, inventory };
            const response = await fetch(`http://localhost:5000/produtos/${produtos.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                }
            );

            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <Fragment>

            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${produtos.id}`}>
           Editar
            </button>

            <div className="modal" id={`id${produtos.id}`} onClick={() => (setName(produtos.name), setPrice(produtos.price), setInventory(produtos.inventory))}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Editar Produtos</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={() => (setName(produtos.name), setPrice(produtos.price), setInventory(produtos.inventory))}>&times;</button>
                </div>

                <div className="modal-body d-flex flex-column align-items-center">
                    <input type="text" className="form-control mt-2 " value={name} placeholder="Nome" onChange={e => setName(e.target.value)}/>
                    <input type="text" className="form-control mt-2 " value={price} placeholder="Valor do Produto" onChange={e => setPrice(e.target.value)}/>
                    <input type="text" className="form-control mt-2 " value={inventory} placeholder="Quantidade" onChange={e => setInventory(e.target.value)}/>

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick= {e => updateProdutos(e)}>Editar</button>

                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => (setName(produtos.name), setPrice(produtos.price), setInventory(produtos.inventory))}>Close</button>
                </div>

                </div>
            </div>
</div> 
        </Fragment>
    )
};

export default EditarProdutos;