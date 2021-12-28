import {Header} from "../Header/Header";
import {ReactChildren, ReactNode} from "react";
import {Outlet} from "react-router-dom";

interface ILayoutProps {
}

export const Layout = ({}: ILayoutProps) => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};
