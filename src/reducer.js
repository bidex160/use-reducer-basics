const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return {
      ...state,
      people: [],
    };
  }

  if (action.type === RESET_LIST) {
    return {
      ...state,
      people: users,
    };
  }

  if (action.type === REMOVE_ITEM) {
    const newPeolple = state.people.filter((p) => p.id !== action.payload.id);
    return {
      ...state,
      people: newPeolple,
    };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
