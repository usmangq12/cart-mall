import { combineReducers } from "redux";

import { cateogaryReducer, productsReducer } from "./Reducers";

const rootReducer = combineReducers({
  productsReducer,
});

export default rootReducer;
