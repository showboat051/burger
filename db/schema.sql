CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger(
    id INT NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR(50) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)