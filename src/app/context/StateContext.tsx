"use client";

import React, { createContext, useReducer, useContext } from "react";

// type State = {
//   id: number;
//   text: string;
//   status: boolean;
// };

// type Action = {
//   type: string;
//   payload: any;
// };

type State = {
  id: number;
  text: string;
  status: boolean;
};

type Action = {
  type: string;
  payload: any;
};

//we need to pass the reducer, initialstats and the chilren into the statsProvider function
//a reducers takes in a state and an action and returns the updated state wrt to the action passed to it

type Reducer = (state: State[], action: Action) => State[];

type ReducerType = {
  reducer: Reducer;
  initialState: State[];
  children?: React.ReactNode;
};

export const StateContext = createContext<
  [State[], React.Dispatch<Action>] | undefined
>(undefined);

export const StateProvider: React.FC<ReducerType> = ({
  reducer,
  initialState,
  children,
}) => {
  const value = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateProvider = (): [State[], React.Dispatch<Action>] => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateProvider must be used within a StateProvider");
  }
  return context;
};
