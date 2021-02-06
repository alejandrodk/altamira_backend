/**
 * Redondea la cantidad hasta que sea múltiplo
 * del mínimo de venta
 * @param {number} quantity
 * @param {number} min
 * @return {number} quantity
 */
export function getArticleQuantity(quantity, min) {
  if (!quantity % min) return quantity;

  while (quantity % min !== 0) quantity++;
  return quantity;
}

/**
 * Actualiza el monto total del carrito
 * segun los artículos agregados
 * @param {object} cart
 * @return {object} cart
 */
export function updateCartTotalPrice(cart) {
  cart.total =
    cart?.articulos?.reduce((acc, { precio, cantidad }) => {
      acc += precio * cantidad;
      return acc;
    }, 0) || 0;
  return cart;
}
