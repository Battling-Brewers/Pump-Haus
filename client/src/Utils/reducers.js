import { useReducer } from 'react';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product._id !== action._id;
        });
  
        // Then we return a copy of state and check to see if the cart is empty.
        // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
