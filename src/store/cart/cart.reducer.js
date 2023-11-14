import { setCartItems, setIsCartOpen } from './cart.action';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};