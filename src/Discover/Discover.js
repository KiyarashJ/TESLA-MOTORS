import React, { useReducer } from "react";
import DiscoverItem from "./DiscoverItem";
import { DiscoverFeatures } from "./DiscoverData";
import "./Discover.css";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_EXPAND":
      const newState = [...state];
      newState[action.payload] = !newState[action.payload];
      return newState;
    default:
      return state;
  }
}

function Discover() {
  const [expandStates, dispatch] = useReducer(
    reducer,
    DiscoverFeatures.map(() => false)
  );

  return (
    <section className="discover-section">
      <h2>Discover TESLA : </h2>
      <div className="discover-grid">
        {DiscoverFeatures.map((feature, index) => (
          <DiscoverItem
            key={feature.id}
            feature={feature}
            isExpanded={expandStates[index]}
            toggleExpand={() => dispatch({ type: "TOGGLE_EXPAND", payload: index })}
          />
        ))}
      </div>
    </section>
  );
}

export default Discover;