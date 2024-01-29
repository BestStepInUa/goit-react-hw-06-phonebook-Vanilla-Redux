const initialState = '';

export const changeFilter = name => {
  return {
    type: 'filter/changeFilter',
    payload: name,
  };
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter': {
      return action.payload;
    }
    default:
      return state;
  }
};
