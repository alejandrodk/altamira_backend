import { DataTypes } from 'sequelize';
import { Entities } from '../enums/entities.enums';
import Database from '../database';

const modelName = Entities.Lineas;
const db = new Database();

export const Linea = db.sequelize.define(modelName, {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db.sequelize,
  modelName,
  timestamps: false,
});
