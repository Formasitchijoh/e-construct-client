import React from "react";

import { createContext, useReducer, useContext } from "react";

type reducerType = {
  reducer: React.ReducerWithoutAction<any>;
  initialState: React.ReducerState<any>;
  children?: React.ReactNode;
};

export const StateContext = createContext([]);

export const StateProvider: React.FC<reducerType> = ({
  reducer,
  initialState,
  children,
}) => {
  const state = useReducer(reducer, initialState);

  return (
    // <StateContext.Provider value={state}>
    //         {children}
    // </StateContext.Provider>
    <div>file</div>
  );
};

export const useStateProvider = () => useContext(StateContext);
