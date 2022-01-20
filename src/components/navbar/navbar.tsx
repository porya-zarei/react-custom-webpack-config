import {FC} from "react";
import NavbarBtn from "./navbar-btn/navbar-btn";
import NavbarList from "./navbar-list/navbar-list";
import SearchInput from "./search-input/search-input";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className="w-full p-2 h-14 flex justify-start items-center bg-gray-50">
            <div className="w-auto h-full">
                <NavbarBtn />
            </div>
            <div className="h-full w-auto mr-8">
                <img
                    className="w-auto h-full"
                    src="https://via.placeholder.com/120x50"
                    alt="logo"
                />
            </div>
            <div className="flex justify-start items-center w-auto h-auto">
                <NavbarList />
            </div>
            <div className="center h-full w-auto">
                <SearchInput />
            </div>
        </nav>
    );
};

export default Navbar;
