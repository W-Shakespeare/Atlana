import apiConfig from "./api.config";
import { UserItem, UserItemRepo, UserListItem } from "./resource";

export const getUserList = (): Promise<Array<UserListItem>> =>
  apiConfig.get("/users");

export const getSelectedUser = (id: string): Promise<UserItem> =>
  apiConfig.get(`/users/${id}`);

export const getSelectedUserRepo = (id: string): Promise<Array<UserItemRepo>> =>
  apiConfig.get(`/users/${id}/repos`);
