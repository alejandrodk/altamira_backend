import { DataTypes } from 'sequelize';
import { Entities } from '../enums/entities.enums';
import Database from '../database';

const modelName = Entities.Especialidades;
const db = new Database();

export const Especialidad = db.sequelize.define(modelName, {
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
