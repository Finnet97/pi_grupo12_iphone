module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    usuarioId: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    imagen: {
      type: dataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: dataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: dataTypes.STRING,
      allowNull: false
    },
    createdAt: dataTypes.DATE,
    updatedAt: dataTypes.DATE,
    deletedAt: dataTypes.DATE
  };

  let config = {
    tableName: "productos",
    timestamps: true,
    underscored: false
  };

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "usuarioId"
    });
  
    Producto.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "productoId"
    });
  };  

  return Producto;
};  