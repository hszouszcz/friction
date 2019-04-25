import { UPDATE_CART } from './reducers';

export const updateCart = (itemsInCart) => ({
  type: UPDATE_CART,
  payload: itemsInCart
});