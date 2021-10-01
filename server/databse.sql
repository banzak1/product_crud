CREATE DATABASE crud_produtos;

CREATE TABLE produtos(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price money,
    inventory INTEGER
);