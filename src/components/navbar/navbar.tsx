import {FC} from "react";
import NavbarBtn from "./navbar-btn/navbar-btn";
import NavbarList from "./navbar-list/navbar-list";
import NavbarLogo from "./navbar-logo/navbar-logo";
import SearchInput from "./search-input/search-input";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className="w-full p-2 h-14 flex justify-start items-center bg-gray-50">
            <div className="w-auto h-full">
                <NavbarBtn />
            </div>
            <div className="h-full w-auto mr-8">
                <NavbarLogo/>
            </div>
            <div className="flex justify-start items-center w-auto h-auto">
                <NavbarList />
            </div>
            <div className="center h-full w-auto ml-auto mr-6">
                <SearchInput />
            </div>
        </nav>
    );
};

export default Navbar;
