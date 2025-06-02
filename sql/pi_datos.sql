CREATE SCHEMA miralo_watch;
USE miralo_watch;

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
INSERT INTO productos (usuarioId, imagen, nombre, descripcion) VALUES 
(1, 'rolexSub.webp', 'Rolex Submariner', 'Reloj de buceo icónico con caja de acero inoxidable y bisel giratorio unidireccional.'),
(2, 'omega.webp', 'Omega Speedmaster', 'Cronógrafo legendario conocido como el \'Moonwatch\', usado en misiones espaciales.'),
(3, 'tag.png', 'Tag Heuer Carrera', 'Diseño deportivo inspirado en las carreras, con cronógrafo y cristal de zafiro.'),
(4, 'audemars.webp', 'Audemars Piguet', 'Reloj francés de lujo, clasico.'),
(5, 'gshock.jpg', 'Casio G-Shock', 'Reloj digital ultrarresistente con funciones múltiples y estilo urbano.'),
(1, 'tissot.webp', 'Tissot PRX', 'Diseño retro con movimiento suizo y brazalete integrado.'),
(2, 'citizen.webp', 'Citizen Eco-Drive', 'Reloj solar que no necesita cambio de batería, con estilo clásico.'),
(3, 'breitling.webp', 'Breitling Navitimer', 'Reloj para pilotos con regla de cálculo y diseño robusto.'),
(4, 'hamilton.webp', 'Hamilton Khaki Field', 'Estética militar con precisión suiza, ideal para uso casual.'),
(5, 'danielwellington.jpg', 'Daniel Wellington Classic', 'Minimalista y elegante, perfecto para ocasiones formales.');

-- Insertar comentarios
-- Comentarios para Rolex Submariner (productoId 1)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(1, 2, 'Impresionante calidad, lo uso todos los días y sigue como nuevo.'),
(1, 3, 'Un clásico atemporal, vale cada centavo.'),
(1, 4, 'Lo heredé de mi padre, y todavía funciona perfecto. Increíble.');

-- Omega Speedmaster (productoId 2)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(2, 1, 'Es hermoso, muy cómodo y con una historia única.'),
(2, 4, 'Mi favorito del día a día. El cronógrafo es muy preciso.'),
(2, 5, 'Ideal para quienes valoran la tradición y la precisión suiza.');

-- Tag Heuer Carrera (3)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(3, 1, 'El diseño deportivo es lo que más me gusta. Elegante pero informal.'),
(3, 2, 'Muy cómodo en la muñeca, y se ve increíble.');

-- Seiko Prospex (4)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(4, 3, 'Lo usé para bucear en Brasil, ni una falla. Lo recomiendo fuerte.'),
(4, 4, 'Gran relación precio-calidad. Seiko nunca decepciona.'),
(4, 5, 'Un tanque en la muñeca. Resistente y con estilo.');

-- Casio G-Shock (5)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(5, 1, 'Lo uso para entrenar y para salir. No lo cambio por nada.'),
(5, 3, 'Muy práctico, resistente y con un diseño que llama la atención.');

-- Tissot PRX (6)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(6, 2, 'Un guiño al pasado con tecnología moderna. Me encanta.'),
(6, 4, 'El brazalete es muy cómodo y el diseño es precioso.'),
(6, 5, 'Luce muy bien con ropa casual o elegante.');

-- Citizen Eco-Drive (7)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(7, 1, 'Me encanta no tener que cambiar la batería nunca.'),
(7, 5, 'Elegante, cómodo y ecológico. 10 puntos.');

-- Breitling Navitimer (8)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(8, 2, 'Lo uso en vuelo. Precisión y estilo en uno solo.'),
(8, 3, 'La regla de cálculo es un detalle espectacular.'),
(8, 5, 'Robusto pero refinado. Uno de mis favoritos.');

-- Hamilton Khaki Field (9)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(9, 1, 'Tiene una onda militar muy copada. Se nota la calidad.'),
(9, 4, 'Perfecto para el día a día, sin exageraciones.'),
(9, 5, 'Buen precio y excelente fabricación.');

-- Daniel Wellington Classic (10)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES 
(10, 2, 'Sencillo, pero con mucha presencia. Ideal para reuniones.'),
(10, 3, 'Lindo diseño, combina con todo.');