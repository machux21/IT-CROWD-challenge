const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Brand', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
