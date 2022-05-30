import React, { FC, useEffect, useState } from "react";
import { getUserList } from "../../../context/userList/userList.asyncAction";
import { UserItem } from "./components/userItem/userItem";
import { Searcher } from "../../searcher/searcher";
import "./style.scss";
import { NavLink } from "react-router-dom";
import {
  useDispatch,
  useStateContext,
} from "../../../context/userList/userListContext";
import { Loader } from "../../loader";
import { UserListItem } from "../../../api/resource";

const Home: FC = () => {
  const { userList, homePageLoading } = useStateContext();
  const dispatch = useDispatch();

  const [seracherList, setSearcherList] = useState(userList);

  useEffect(() => {
    userList.length === 0 && getUserList(dispatch);
  }, []);

  useEffect(() => {
    setSearcherList(userList);
  }, [userList]);

  return (
    <section className="home-page">
      {homePageLoading && <Loader />}

      <div className="content">
        <div className="wrapper-searcher">
          <Searcher
            onChange={(searchedList: Array<UserListItem>) => {
              setSearcherList(searchedList);
            }}
            searcherList={userList}
            searchrByField="login"
            placeholder="Search for Users"
          />
        </div>
        <div className="wrapper-user-list">
          {seracherList.map(({ login, avatar_url, node_id }) => (
            <NavLink key={node_id} to="/user" state={login}>
              <div className="wrapper-user">
                <UserItem login={login} avatar_url={avatar_url} />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
