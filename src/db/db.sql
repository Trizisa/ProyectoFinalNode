-- Active: 1707473741479@@127.0.0.1@3306@nodebbdd
create database if not exists NodeBBDD;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameUser VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (`nameUser` , `password`) VALUES ('Patricia', 'e8bc391a18dcd');
