import React, { useReducer } from "react";
import PerformanceItem from "./performance";
import { TSpecs } from "./TechnicalSpecsData";
import "./TechnicalSpecs.css";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      const newState = [...state];
      newState[action.payload] = !newState[action.payload];
      return newState;
    default:
      return state;
  }
}

function Performance() {
  const [modalStates, dispatch] = useReducer(reducer, TSpecs.map(() => false));

  return (
    <div className="performance-wrapper">
      {TSpecs.map((data, index) => (
        <PerformanceItem
          key={data.id}
          data={data}
          isOpen={modalStates[index]}
          toggleModal={() => dispatch({ type: "TOGGLE_MODAL", payload: index })}
        />
      ))}
    </div>
  );
}

export default Performance;