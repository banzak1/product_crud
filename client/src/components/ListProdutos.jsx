import React, { Fragment, useState, useEffect } from 'react';

const ListProdutos = () => {

    const [ produtos, setProdutos ] = useState([]);

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
            <table class="table mt-5 text-center">
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
                    {/*                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                     */}
                    {produtos.map(produtos => (
                        <tr>
                            <td>{produtos.name}</td>
                            <td>{produtos.price}</td>
                            <td>{produtos.inventory}</td>
                            <td>Editar</td>
                            <td>Deletar</td>


                        </tr>
                    ))}

                </tbody>
            </table>
        </Fragment>
    )

};

export default ListProdutos;