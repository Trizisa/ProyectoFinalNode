-- Active: 1707473741479@@127.0.0.1@3306@nodebbdd
create database if not exists NodeBBDD;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameUser VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone INTEGER NOT NULL,
    password VARCHAR(255) NOT NULL,
    job VARCHAR(255)
);

INSERT INTO users (`nameUser` , `lname`, `email` , `phone` , `password` , `job`) 
    VALUES ('Patricia', 'Martos', 'Patricia@gmail.com', '610000000', 'e8bc391a18dcd', 'estudiante');
