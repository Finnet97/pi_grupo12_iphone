module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false
      },
      fechaNacimiento: {
        type: dataTypes.DATEONLY,
        allowNull: false
      },
      dni: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      fotoPerfil: {
        type: dataTypes.STRING
      },
      createdAt: dataTypes.DATE,
      updatedAt: dataTypes.DATE,
      deletedAt: dataTypes.DATE
    };
  
    let config = {
      tableName: "usuarios",
      timestamps: true,
      underscored: false
    };
  
    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
};  