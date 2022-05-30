import React, { useReducer } from "react";
import { ActionsType } from "../actionTypes";
import {
  initialState,
  initialStateType,
  UserListReducer,
} from "./userList.reducer";

type Dispatch = (action: ActionsType) => void;
type ProviderProps = { children: React.ReactNode };

const StateContext = React.createContext<initialStateType | undefined>(
  undefined
);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

export const useStateContext = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
};

export const useDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
};

export const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(UserListReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
