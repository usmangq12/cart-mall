import { combineReducers } from "redux";

import { productsReducer } from "./Reducers";

const rootReducer = combineReducers({
  productsReducer,
});

export default rootReducer;
