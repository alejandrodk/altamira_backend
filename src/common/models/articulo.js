import { DataTypes } from 'sequelize';
import { Entities } from '../enums/entities.enums';
import Database from '../database/sequelize';

const modelName = Entities.Articulos;
const db = new Database();

export const Articulo = db.sequelize.define(modelName, {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  codigo: {
    primaryKey: true,
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  oem: {
    type: DataTypes.STRING,
  },
  modelos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rubro_id: {
    type: DataTypes.INTEGER,
  },
  sub_rubro_id: {
    type: DataTypes.INTEGER,
  },
  renglon: {
    type: DataTypes.INTEGER,
  },
  linea_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caracteristicas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unidad_min_vta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destacado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  orden: {
    type: DataTypes.INTEGER,
  },
  nuevo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db.sequelize,
  modelName,
  timestamps: false,
});

