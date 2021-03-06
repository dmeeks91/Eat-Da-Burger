DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE NOT NULL
);