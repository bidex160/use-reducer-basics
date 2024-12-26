import { useReducer } from "react"
import { people as users } from "./data"
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";

const initialSatate = {
    people: users,
}

const ReducerBasics = () => {
   const [state, dispatch] = useReducer(reducer, initialSatate)
    const clearPeople = () => {
      dispatch({'type': CLEAR_LIST})
  };

    const resetList = () => {
        dispatch({ type: RESET_LIST });
  };

  const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: {id} });
  };

  return (
    <div>
      {state.people.map((p) => {
        return (
          <div className="item" key={p.id}>
            {p.name}
            <button onClick={() => removeItem(p.id)}> Remove </button>
          </div>
        );
      })}
      {state.people.length > 1 ? (
        <button onClick={clearPeople}> Clear </button>
      ) : (
        <button onClick={resetList}> Reset </button>
      )}
    </div>
  );
};

export default ReducerBasics;