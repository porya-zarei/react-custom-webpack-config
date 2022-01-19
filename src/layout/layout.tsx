import {FC} from "react";
import {Outlet} from "react-router-dom";
import FooterLayout from "./footer/footer-layout";
import HeaderLayout from "./header/header-layout";
import MainLayout from "./main/main-layout";

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div>
            <HeaderLayout />
            <MainLayout>
                <Outlet />
            </MainLayout>
            <FooterLayout />
        </div>
    );
};

export default DefaultLayout;
