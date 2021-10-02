import React, { Fragment, useState, useEffect } from 'react';
import './ListProdutos.css'

const ListProdutos = () => {

    const [ produtos, setProdutos ] = useState([]);

    //Deletar
    const deleteProdutos = async id => {
        try {
            const deleteProdutos = await fetch(`http://localhost:5000/produtos/${id}`, {
                method: "DELETE"
            });

            setProdutos(produtos.filter(produtos => produtos.id !== id));
        } catch (error) {
            console.error(error);
        }
    }


    const getProdutos = async () => {
        try {
            
            const response = await fetch("http://localhost:5000/produtos");
            const jsonData = await response.json();
            
            setProdutos(jsonData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProdutos();
    }, [])
    


    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                </tr>
                </thead>
                <tbody>
                    {produtos.map(produtos => (
                        <tr key={produtos.id}>
                            <td>{produtos.name}</td>
                            <td>{produtos.price}</td>
                            <td>{produtos.inventory}</td>
                            <td>Editar</td>
                            <td><button className="btn btn-danger" onClick={() => deleteProdutos(produtos.id)}>Deletar</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Fragment>
    )

};

export default ListProdutos;