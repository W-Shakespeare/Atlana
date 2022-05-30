import React, { FC } from "react";
import "./style.scss";
import { checkHaveData } from "../../../../../utility/checkHaveData";

interface IProps {
  login: string;
  avatar_url: string;
}

export const UserItem: FC<IProps> = (user) => {
  const userAvatarUrl = String(checkHaveData(user?.avatar_url, "UserAvatar"));
  const userName = checkHaveData(user?.login, "UserName");

  // -----------> userRepo remake Back-End <---------
  // I dont see, field for repo in first request
  // I can to make many request by user.repos_url and later added to initial state
  // but is this bad practice
  const userRepo = checkHaveData("Repo##", "Repo##");
  // -----------> userRepo remake Back-End <---------

  return (
    <div className="user">
      <div className="user-img">
        <img src={userAvatarUrl} alt="avatar" />
      </div>
      <div className="user-name">{userName}</div>
      <div className="user-repo">{userRepo}</div>
    </div>
  );
};
