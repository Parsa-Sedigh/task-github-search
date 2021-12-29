import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className="fa fa-github mr-05"></i>
                Github Search
            </h1>
            <ul className="">
                <li className="">
                    <Link to="/" className="">Home</Link>

                </li>

                <li className="">
                    <Link to="/about" className="">About</Link>
                </li>

            </ul>
        </nav>
    );
};
