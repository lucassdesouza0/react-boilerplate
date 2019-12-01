// Action Types
export const types = {
  MAIN: 'MAIN',
};

// Reducer
const initialState = {
  teste: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.MAIN:
      return {
        ...state,
        teste: "Teste"
      };
    default:
      return state;
  }
}

// Action Creators
export const main = () => ({
  type: types.MAIN,
});