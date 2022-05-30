import React, { FC, ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSelectedUser } from "../../../context/userList/userList.asyncAction";
import {
  useDispatch,
  useStateContext,
} from "../../../context/userList/userListContext";
import { Loader } from "../../loader";
import "./style.scss";
import { User } from "./user";

const UserContainer: FC = (): any => {
  const { selectedUserRepo, userPageLoading, selectedUser } = useStateContext();
  const dispatch = useDispatch();

  const [seracherList, setSearcherList] = useState(selectedUserRepo);
  const loginCurrentUser = useLocation().state as string;

  const isPageNewUser = selectedUser?.login !== loginCurrentUser;

  useEffect(() => {
    isPageNewUser && getSelectedUser({ dispatch, login: loginCurrentUser });
  }, []);

  useEffect(() => {
    setSearcherList(selectedUserRepo);
  }, [selectedUserRepo]);

  if (isPageNewUser || userPageLoading) return <Loader />;
  if (selectedUser) {
    return (
      <User
        {...selectedUser}
        seracherList={seracherList}
        selectedUserRepo={selectedUserRepo}
        setSearcherList={setSearcherList}
      />
    );
  }
};

export default UserContainer;
