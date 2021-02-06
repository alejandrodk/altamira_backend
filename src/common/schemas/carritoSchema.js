/* eslint-disable no-invalid-this */
import { Schema } from 'mongoose';
import { articuloSchema } from './articuloSchema';
import { updateCartTotalPrice } from '../../components/tienda/tiendaHelpers';

export const CarritoSchema = new Schema(
    {
      cliente: {
        type: Number,
        index: true,
        unique: true,
        required: true,
      },
      articulos: {
        type: [articuloSchema],
        default: [],
      },
      descuento: {
        type: Number,
        default: 20,
      },
      total: {
        type: Number,
        default: 0,
      },
    },
    {
      id: false,
      timestamps: true,
    },
);

CarritoSchema.pre('updateOne', function(next) {
  const cart = this.getUpdate();
  updateCartTotalPrice(cart);
  next();
});
