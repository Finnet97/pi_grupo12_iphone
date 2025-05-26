CREATE SCHEMA mercado_liebre;
USE mercado_liebre;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL, -- mail
    password VARCHAR(255) NOT NULL, -- contra
    fechaNacimiento DATE NOT NULL,
    dni INT NOT NULL, -- DNI
    fotoPerfil VARCHAR(255), -- pfp
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP

	-- FK
);

CREATE TABLE productos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT NOT NULL, -- Id del usuario que cargó el producto (USAR FK)
    imagen VARCHAR(255) NOT NULL, -- img
    nombre VARCHAR(255) NOT NULL, -- nombre (producto)
    descripcion VARCHAR(255) NOT NULL, -- desc (producto)
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    
    -- FK
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productoId INT NOT NULL,
    usuarioId INT NOT NULL,
    texto TEXT NOT NULL,
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    
    -- FK
    FOREIGN KEY (productoId) REFERENCES productos(id),
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

-- Insertar datos de usuarios
INSERT INTO usuarios (email, password, fechaNacimiento, dni, fotoPerfil) 
VALUES ('juan.perez@mail.com', 'password123', '1985-04-12', 12345678, 'juan.jpg');

INSERT INTO usuarios (email, password, fechaNacimiento, dni, fotoPerfil) 
VALUES ('totochipont@gmail.com', 'contraChipi', '2005-08-08', 94112880, 'chipo.png');

INSERT INTO usuarios (email, password, fechaNacimiento, dni, fotoPerfil)
VALUES ('gianluca.piperno@mail.com', 'gianlu123', '1979-03-15', 34567890, 'gian.png');

INSERT INTO usuarios (email, password, fechaNacimiento, dni, fotoPerfil)
VALUES ('joacoate@mail.com', 'joacoLocooo', '1992-11-30', 45678901, 'joaco.jpg');

INSERT INTO usuarios (email, password, fechaNacimiento, dni, fotoPerfil) 
VALUES ('ana.martinez@mail.com', 'anaMartinez', '1988-09-08', 56789012, 'ana.png');

-- Insertar publicaciones de productos
INSERT INTO productos (usuarioId, imagen, nombre, descripcion) 
VALUES (1, 'producto1.jpg', 'Camisa Casual', 'Camisa casual de algodón, ideal para el verano.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (2, 'producto2.jpg', 'Zapatos Deportivos', 'Zapatos deportivos para correr y actividades al aire libre.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (3, 'producto3.jpg', 'Reloj Moderno', 'Reloj de pulsera con diseño moderno y elegante.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (4, 'producto4.jpg', 'Bolso de Mano', 'Bolso de mano en cuero genuino, perfecto para ocasiones formales.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (5, 'producto5.jpg', 'Auriculares Inalámbricos', 'Auriculares bluetooth con alta calidad de sonido.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (1, 'producto6.jpg', 'Lámpara de Mesa', 'Lámpara de mesa con diseño minimalista y luz LED.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (2, 'producto7.jpg', 'Silla Ergonómica', 'Silla ergonómica para oficina, garantiza comodidad durante el trabajo.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (3, 'producto8.jpg', 'Mesa de Centro', 'Mesa de centro en madera, combina con cualquier estilo.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (4, 'producto9.jpg', 'Libro de Cocina', 'Libro con recetas tradicionales y modernas, muy completo.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (5, 'producto10.jpg', 'Cartera de Mujer', 'Cartera elegante, espaciosa y moderna.');

-- Insertar comentarios
-- Producto 1
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (1, 2, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (1, 3, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (1, 4, 'Tercer comentario');

-- Producto 2
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (2, 1, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (2, 4, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (2, 5, 'Tercer comentario');

-- Producto 3
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (3, 2, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (3, 4, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (3, 5, 'Tercer comentario');

-- Producto 4
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (4, 1, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (4, 3, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (4, 5, 'Tercer comentario');

-- Producto 5
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (5, 1, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (5, 2, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (5, 3, 'Tercer comentario');

-- Producto 6
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (6, 2, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (6, 3, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (6, 5, 'Tercer comentario');

-- Producto 7
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (7, 1, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (7, 3, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (7, 4, 'Tercer comentario');

-- Producto 8
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (8, 1, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (8, 4, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (8, 5, 'Tercer comentario');

-- Producto 9
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (9, 2, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (9, 3, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (9, 4, 'Tercer comentario');

-- Producto 10
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (10, 1, 'Primer comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (10, 2, 'Segun comentario.');
INSERT INTO comentarios (productoId, usuarioId, texto) 
VALUES (10, 3, 'Tercer comentario');
