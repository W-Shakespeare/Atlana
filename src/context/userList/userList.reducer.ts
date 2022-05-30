import { UserListItem, UserItem, UserItemRepo } from "../../api/resource";
import { ActionsType } from "../actionTypes";

export const initialState = {
  userList: [] as Array<UserListItem>,
  selectedUser: null as null | UserItem,
  selectedUserRepo: [] as Array<UserItemRepo>,
  homePageLoading: false as boolean,
  userPageLoading: false as boolean,
};

export type initialStateType = typeof initialState;

export const UserListReducer = (
  state: initialStateType,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "kushnir//GET_USER_LIST": {
      return { ...state, userList: action.userList };
    }
    case "kushnir//GET_SELECT_USER": {
      return { ...state, selectedUser: action.selectedUser };
    }
    case "kushnir//GET_SELECT_USER_REPO": {
      return { ...state, selectedUserRepo: action.selectedUserRepo };
    }
    case "kushnir//homePage/SET_LOADING_START": {
      return { ...state, homePageLoading: true };
    }
    case "kushnir//homePage/SET_LOADING_END": {
      return { ...state, homePageLoading: false };
    }
    case "kushnir//userPage/SET_LOADING_START": {
      return { ...state, userPageLoading: true };
    }
    case "kushnir//userPage/SET_LOADING_END": {
      return { ...state, userPageLoading: false };
    }

    default: {
      return state;
    }
  }
};
