import {IGetUsersResponse, IUser} from "../types/interfaces";

interface IGetUsers {
    query: string;

}

export const getUsers = ({query}: IGetUsers) => {
    return fetch(`https://api.github.com/search/users?q=${query}&client_id=undefined&client_secret=undefined`);
};

export const getUser = (username: string) => {
    return fetch(`https://api.github.com/users/${username}?client_id=undefined&client_secret=undefined`);
};

export const getUserRepos = (login: string) => {
    return fetch(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`);
};
