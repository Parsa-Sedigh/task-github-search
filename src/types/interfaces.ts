import {Status} from "./types";

export interface IStatusObj {
    status: Status;
    message: string;
}

export interface IActionsProps {
    statusObj: IStatusObj;
    setStatusObj: (statusObj: IStatusObj) => void;
}
