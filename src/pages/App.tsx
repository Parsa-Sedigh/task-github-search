import styles from '../styles/App.module.scss';
import {Actions} from "../components/Actions/Actions";
import {useState} from "react";
import {DEFAULT_STATUS_OBJ} from "../constants/constants";

export const App = () => {
    const [statusObj, setStatusObj] = useState(DEFAULT_STATUS_OBJ);

  return (
    <div className={styles.container}>
        <Actions statusObj={statusObj} setStatusObj={setStatusObj} />

        {statusObj.status === 'LOADING' ?
        <p>Loading...</p>
        :
            <p>show cards</p>}
    </div>
  )
};
