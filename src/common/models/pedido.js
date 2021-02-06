import { DataTypes } from 'sequelize';
import { Entities } from '../enums/entities.enums';
import Database from '../database/sequelize';

const modelName = Entities.Pedidos;
const db = new Database();

export const Pedido = db.sequelize.define(
    modelName,
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
      },
      fecha: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      nota: {
        type: DataTypes.STRING,
      },
      total_items: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize: db.sequelize,
      modelName,
      timestamps: false,
    },
);
