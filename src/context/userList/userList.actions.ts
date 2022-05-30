import * as R from "../../api/resource";

const actions = {
  setUserList: (userList: Array<R.UserListItem>) =>
    ({ type: "kushnir//GET_USER_LIST", userList } as const),
  setSelectedUser: (selectedUser: R.UserItem) =>
    ({ type: "kushnir//GET_SELECT_USER", selectedUser } as const),
  setSelectedUserRepo: (selectedUserRepo: Array<R.UserItemRepo>) =>
    ({ type: "kushnir//GET_SELECT_USER_REPO", selectedUserRepo } as const),
  setLoadingHomePageStart: () =>
    ({ type: "kushnir//homePage/SET_LOADING_START" } as const),
  setLoadingHomePageEnd: () =>
    ({ type: "kushnir//homePage/SET_LOADING_END" } as const),
  setLoadingUserPageStart: () =>
    ({ type: "kushnir//userPage/SET_LOADING_START" } as const),
  setLoadingUserPageEnd: () =>
    ({ type: "kushnir//userPage/SET_LOADING_END" } as const),
};
export default actions;
