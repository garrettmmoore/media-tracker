CREATE DATABASE media_db;
USE media_db;

CREATE TABLE media
(
    id int NOT NULL AUTO_INCREMENT,
    media_name varchar(255) NOT NULL,
    viewed BOOLEAN DEFAULT false,
    personal_rating DECIMAL (10,2) NULL,
    PRIMARY KEY (id)
);