'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

/* Definir relaciones */
const { Usuario, Producto, Comentario } = db;

// usuario - productos
Usuario.hasMany(Producto, { foreignKey: 'usuarioId' });
Producto.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Usuario - comentarios
Usuario.hasMany(Comentario, { foreignKey: 'usuarioId' });
Comentario.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Producto - comentarios
Producto.hasMany(Comentario, { foreignKey: 'productoId' });
Comentario.belongsTo(Producto, { foreignKey: 'productoId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;