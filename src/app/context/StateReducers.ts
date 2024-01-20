"use client";

import { constants } from "./constants";
export const initialStates = [
  { id: 0, text: "Hungary", status: true },
  { id: 1, text: "Mothers House", status: false },
  { id: 2, text: "Trip to Kribi", status: true },
  { id: 3, text: "On The wing of Love", status: false },
  { id: 4, text: "My gran mothers diary", status: true },
];
type State = {
  id: number;
  text: string;
  status: boolean;
};

type Action = {
  type: string;
  payload: { id: number; text: string; status: boolean };
};

const StateReducer = (state: State[], action: Action) => {
  switch (action.type) {
    case constants.SET_USER_INFO:
      const newTask = {
        id: action.payload.id,
        text: action.payload.text,
        status: action.payload.status,
      };
      console.log(
        `new task testing the statereducer function  i have created`,
        { newTask },
      );

      return [newTask, ...state];
  }
};

export default StateReducer;
