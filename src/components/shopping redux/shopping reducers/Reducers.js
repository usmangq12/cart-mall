import { SET_CATEOGARIES_LIST } from "../Actions";

const initialState = {
  List: [],
};

const cateogaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEOGARIES_LIST:
      return {
        ...state,
        List: action.payload,
      };
    default:
      return state;
  }
};


export default cateogaryReducer;
