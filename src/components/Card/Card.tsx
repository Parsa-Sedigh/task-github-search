import styles from './Card.module.scss';
import {IUser} from "../../types/interfaces";
import {Link} from "react-router-dom";

type TCardProps = Pick<IUser, 'avatar_url' | 'login'>;

export const Card = ({avatar_url, login}: TCardProps) => {
    return (
        <div className={`${styles.card} text-center`}>
            <img src={avatar_url} alt={login} className="round-img" loading="lazy" style={{width: '50px'}}/>
            <h3>{login}</h3>
            <div className="my-1">
                <Link className="btn btn-dark btn-sm" to={`/user/${login}`}>More</Link>
            </div>
        </div>
    );
};
