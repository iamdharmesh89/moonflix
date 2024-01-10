import { legacy_createStore as createStore} from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  elements: [],
};

// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ELEMENT":
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case "REMOVE_ELEMENT":
      const filteredElements = state.elements.filter(
        (element) => element !== action.payload
      );
      return {
        ...state,
        elements: filteredElements,
      };  
    default:
      return state;
  }
}


// Create the store
const store = createStore(reducer);

export default store;
