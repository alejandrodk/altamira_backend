import { DataTypes } from 'sequelize';
import { Entities } from '../enums/entities.enums';
import Database from '../database/sequelize';

const modelName = Entities.Rubros;
const db = new Database();

export const Rubro = db.sequelize.define(modelName, {
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
