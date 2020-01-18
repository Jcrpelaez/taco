-- Create the database --
DROP DATABASE IF EXISTS tacos_db;
CREATE DATABASE tacos_db;
USE tacos_db;

-- Create a tacos table with the required fields --
CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	PRIMARY KEY(id)
); 