import {FC} from "react";
import {NavLink} from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import {getRandom} from "../../utils/helpers";

interface HeaderLayoutProps {}

const HeaderLayout: FC<HeaderLayoutProps> = () => {
    return (
        <header className="fixed top-0 left-0 h-auto center w-full">
            <Navbar/>
        </header>
    );
};

export default HeaderLayout;
