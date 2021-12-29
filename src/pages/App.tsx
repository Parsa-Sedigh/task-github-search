import styles from '../styles/App.module.scss';
import {Actions} from "../components/Actions/Actions";
import {useState} from "react";
import {DEFAULT_STATUS_OBJ} from "../constants/constants";
import {IUser} from "../types/interfaces";
import {Card} from "../components/Card/Card";

export const App = () => {
    const [statusObj, setStatusObj] = useState(DEFAULT_STATUS_OBJ);
    const [users, setUsers] = useState<IUser[]>([]);

  return (
    <div className="container">
        <Actions statusObj={statusObj} setStatusObj={setStatusObj} setUsers={setUsers} />

        {statusObj.status === 'LOADING' ?
        <img className={styles.spinner} alt="loading..." src="/spinner.gif" loading="lazy" />
        :
            <div className={styles.cards}>
                {users.map(user => <Card key={user.id} avatar_url={user.avatar_url} login={user.login}/>)}
            </div>}
    </div>
  )
};
