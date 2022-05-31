import React, { FC } from "react";
import { UserItemRepo } from "../../../api/resource";
import { Searcher } from "../../searcher/searcher";

interface UserP {
  avatar_url: string;
  name: string;
  login: string;
  email: string;
  location: string;
  created_at: string;
  followers: number;
  following: number;
  seracherList: Array<UserItemRepo>;
  selectedUserRepo: Array<UserItemRepo>;
  setSearcherList: React.Dispatch<React.SetStateAction<Array<UserItemRepo>>>;
}
export const User: FC<UserP> = (p) => {
  return (
    <section className="user-page">
      <div className="content">
        <div className="user-data">
          <div className="user-data-img">
            <img src={p.avatar_url} alt="avatar" />
          </div>
          <div className="user-data-description">
            <div className="user-data-name">{`Name: ${p.name}`}</div>
            <div className="user-data-login">{`Login: ${p.login}`}</div>
            <div className="user-data-email">{`Email: ${p.email}`}</div>
            <div className="user-data-location">{`Location: ${p.location}`}</div>
            <div className="user-data-created">{`Join: ${p.created_at}`}</div>
            <div className="user-data-followers">{`Followers: ${p.followers}`}</div>
            <div className="user-data-following">{`Following: ${p.following}`}</div>
          </div>
        </div>
        <div className="wrapper-searcher">
          <Searcher
            onChange={(searchedList: Array<UserItemRepo>) => {
              p.setSearcherList(searchedList);
            }}
            searchrByField="name"
            searcherList={p.selectedUserRepo}
            placeholder="Search for Users Repositories"
          />
        </div>

        <div className="wrapper-repo-list">
          {p.seracherList.map((repo) => {
            return (
              <div key={repo.node_id} className="wrapper-repo">
                <a href={repo.html_url} target="_blank">
                  <div className="repo">
                    <div className="repo-name cutLongText" key={repo.node_id}>
                      {repo.name}
                    </div>
                    <div className="wrapper-star-and-forks">
                      <div className="repo-star">
                        {`${repo.stargazers_count} Forks`}
                      </div>
                      <div className="repo-forks">
                        {`${repo.forks_count} Stars`}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
