// action to add an element to the state
export const addElement = (element) => {
    return {
      type: "ADD_ELEMENT",
      payload: element,
    };
  };


export const removeElement = (element) => {
  return {
    type: "REMOVE_ELEMENT",
    payload: element,
  };
};  
  