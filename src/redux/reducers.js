export const UPDATE_CART = 'UPDATE_CART';


const getCartItemsNumber = () => {
  if (localStorage.getItem('cart'))
    return JSON.parse(localStorage.getItem('cart')).length;
  return 0;
};

const initialState = {
  itemsInCart: getCartItemsNumber()
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        itemsInCart: action.payload
      };
    default:
      return state;
  }
};

