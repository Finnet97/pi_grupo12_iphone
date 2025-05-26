module.exports = function (sequelize, dataTypes) {
  let alias = "Comentario";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    productoId: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    usuarioId: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    texto: {
      type: dataTypes.TEXT,
      allowNull: false
    },
    createdAt: dataTypes.DATE,
    updatedAt: dataTypes.DATE,
    deletedAt: dataTypes.DATE
  };

  let config = {
    tableName: "comentarios",
    timestamps: true,
    underscored: false
  };

  let Comentario = sequelize.define(alias, cols, config);

  Comentario.associate = function (models) {
    Comentario.belongsTo(models.Usuario, {
      as: "autor",
      foreignKey: "usuarioId"
    });
  
    Comentario.belongsTo(models.Producto, {
      as: "producto",
      foreignKey: "productoId"
    });
  };
    
  return Comentario;
};  