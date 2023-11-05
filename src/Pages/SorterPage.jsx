import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router";

import BarsContainer from "../Components/SorterPageComponents/BarsContainer";

import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
} from "../Algorithms";

const arrayReducer = (state, action) => {
  if (action.type === "SHUFFLE") {
    const shuffled = state.currentArray.sort(() => Math.random() - 0.5);
    return {
      currentArray: shuffled,
      current: 0,
      arrayStates: [],
    };
  } else if (action.type === "NEXTSTATE") {
    return {
      currentArray: state.arrayStates[state.current + 1],
      current: state.current + 1,
      arrayStates: state.arrayStates,
    };
  } else if (action.type === "PREVSTATE") {
    return {
      currentArray: state.arrayStates[state.current - 1],
      current: state.current - 1,
      arrayStates: state.arrayStates,
    };
  } else if (action.type === "SETSTATES") {
    const algo = action.algo;
    let arrayStates;
    if (algo === "bubble") {
      arrayStates = bubbleSort([...state.currentArray]);
    } else if (algo === "insertion") {
      arrayStates = insertionSort([...state.currentArray]);
    } else if (algo === "selection") {
      arrayStates = selectionSort([...state.currentArray]);
    } else if (algo === "merge") {
      arrayStates = mergeSort([...state.currentArray]);
    }

    return {
      currentArray: state.currentArray,
      current: 0,
      arrayStates: arrayStates,
    };
  }

  return {
    currentArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    current: 0,
    arrayStates: [],
  };
};

export default function SorterPage() {
  const params = useParams();
  const [state, reducer] = useReducer(arrayReducer, {
    currentArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    current: 0,
    arrayStates: [],
  });
  const algo = params.id;

  useEffect(() => {
    reducer({ type: "SHUFFLE" });
    reducer({ type: "SETSTATES", algo: algo });
  }, [algo]);

  return (
    <>
      <BarsContainer list={state.currentArray} />
      <button
        onClick={() => reducer({ type: "NEXTSTATE" })}
        disabled={state.current === state.arrayStates.length - 1}
      >
        Next
      </button>
      <button
        onClick={() => reducer({ type: "PREVSTATE" })}
        disabled={state.current === 0}
      >
        Previous
      </button>
      <button
        onClick={() => {
          reducer({ type: "SHUFFLE" });
          reducer({ type: "SETSTATES", algo: algo });
        }}
      >
        Shuffle
      </button>
    </>
  );
}
