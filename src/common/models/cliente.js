import { DataTypes } from 'sequelize';
import { Entities } from '../enums/entities.enums';
import Database from '../database/sequelize';

const modelName = Entities.Clientes;
const db = new Database();

export const Cliente = db.sequelize.define(
    modelName,
    {
      numero: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      razon_social: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      situacion_iva: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      viajante_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      condicion_pago: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio_especial: {
        type: DataTypes.STRING,
      },
      transporte: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: db.sequelize,
      modelName,
      timestamps: false,
    },
);
