const initialState = [];

const valuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUES':
      return [...state,action.payload];
    default:
      return state;
  }
};

export default valuesReducer;