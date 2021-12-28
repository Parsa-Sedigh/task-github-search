import styles from './Header.module.scss';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <nav className={styles.header}>
            <h1>Github Search</h1>
            <ul className={styles.header__list}>
                <li className={styles.header__item}>
                    <Link to="/" className={styles.header__link}>Home</Link>

                </li>

                <li className={styles.header__item}>
                    <Link to="/about" className={styles.header__link}>About</Link>
                </li>

            </ul>
        </nav>
    );
};
