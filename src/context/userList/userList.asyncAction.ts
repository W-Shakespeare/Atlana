import * as api from "../../api/userList";
import { ActionsType } from "../actionTypes";
import action from "./userList.actions";

interface getUserSelectedProps {
  dispatch: React.Dispatch<ActionsType>;
  login: string;
}

export const getUserList = async (dispatch: React.Dispatch<ActionsType>) => {
  dispatch(action.setLoadingHomePageStart());
  const userList = await api.getUserList();
  dispatch(action.setUserList(userList));
  dispatch(action.setLoadingHomePageEnd());
};

export const getSelectedUser = async ({
  dispatch,
  login,
}: getUserSelectedProps) => {
  dispatch(action.setLoadingUserPageStart());
  const [user, repo] = await Promise.allSettled([
    api.getSelectedUser(login),
    api.getSelectedUserRepo(login),
  ]);
  user.status === "fulfilled" && dispatch(action.setSelectedUser(user.value));
  repo.status === "fulfilled" &&
    dispatch(action.setSelectedUserRepo(repo.value));
  dispatch(action.setLoadingUserPageEnd());
};
