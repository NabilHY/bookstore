const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;
