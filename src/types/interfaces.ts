import {Status} from "./types";

export interface IStatusObj {
    status: Status;
    message: string;
}

export interface IActionsProps {
    statusObj: IStatusObj;
    setStatusObj: (statusObj: IStatusObj) => void;
    setUsers: (users: IUser[]) => void;
}

export interface IGetUsersResponse {
    incomplete_results: boolean;
    items: IUser[];
    total_count: number;
}

export interface IUser {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    score: number;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: 'User';
    url: string;
}
