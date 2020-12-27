import { model } from 'mongoose';
import { CarritoSchema } from '../schemas/carritoSchema';

const Carrito = model('Carrito', CarritoSchema);

export { Carrito, Carrito as default };
