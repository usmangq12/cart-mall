import { SET_PRODUCTS_LIST, SET_DEFAULT_PRODUCTS_LIST } from "../Actions";

const productState = {
  Products: [],
};

export function productsReducer(state = productState, action) {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        Products: action.payload,
      };
    case SET_DEFAULT_PRODUCTS_LIST:
      return {
        ...state,
        Products: action.payload,
      };

    default:
      return state;
  }
}
