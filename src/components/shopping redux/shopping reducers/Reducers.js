import {
  SET_PRODUCTS_LIST,
  SET_PRODUCTS_LIST_ITALIAN,
  SET_PRODUCTS_LIST_IRISH,
  SET_PRODUCTS_LIST_ANIMAL,
  SET_PRODUCTS_LIST_FLOWER,
  SET_PRODUCTS_LIST_CHRISTMAS,
  SET_PRODUCTS_LIST_VALENTINES,
} from "../Actions";

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
    case SET_PRODUCTS_LIST_ITALIAN:
      return {
        ...state,
        Products: action.payload,
      };
    case SET_PRODUCTS_LIST_IRISH:
      return {
        ...state,
        Products: action.payload,
      };
    case SET_PRODUCTS_LIST_ANIMAL:
      return {
        ...state,
        Products: action.payload,
      };
    case SET_PRODUCTS_LIST_FLOWER:
      return {
        ...state,
        Products: action.payload,
      };
    case SET_PRODUCTS_LIST_CHRISTMAS:
      return {
        ...state,
        Products: action.payload,
      };
    case SET_PRODUCTS_LIST_VALENTINES:
      return {
        ...state,
        Products: action.payload,
      };

    default:
      return state;
  }
}
