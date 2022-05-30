import actions from "./userList/userList.actions";

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ReturnActionsTypes<T extends { [key: string]: (...args: any) => any }> =
  ReturnType<PropertiesTypes<T>>;
export type ActionsType = ReturnActionsTypes<typeof actions>;
