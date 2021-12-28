interface IGetUsers {
    query: string;

}

export const getUsers = ({query}: IGetUsers) => {
    return fetch(`https://api.github.com/search/users?q=${query}&client_id=undefined&client_secret=undefined`);
};
