CREATE TABLE IF NOT EXISTS `users_test_julianflores` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `segundo_nombre` VARCHAR(255),
    `apellido_paterno` VARCHAR(255) NOT NULL,
    `apellido_materno` VARCHAR(255),
    `fecha_de_nacimiento` DATE,
    `email` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(20),
    PRIMARY KEY (`id`)
);