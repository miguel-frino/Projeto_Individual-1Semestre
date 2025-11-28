CREATE DATABASE musivsite;

USE musiv;

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(110),
    email VARCHAR(110) UNIQUE,
    senha VARCHAR(100),
     dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE acesso_login (
    idAcesso INT AUTO_INCREMENT PRIMARY KEY,
    fkUsuario INT,
    acao VARCHAR(20),
    dtHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fkLoginUsuario
        FOREIGN KEY (fkUsuario) 
			REFERENCES usuario(idUsuario)
);
