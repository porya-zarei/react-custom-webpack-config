import {FC, MouseEventHandler} from "react";
import {useViewContext} from "../../../contexts/view-context/view-context";
import {BsX, BsList} from "react-icons/bs";
interface NavbarBtnProps {}

const NavbarBtn: FC<NavbarBtnProps> = () => {
    const {showNavbar, changeShowNavbar} = useViewContext();
    const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
        changeShowNavbar((prev) => !prev);
    };
    return (
        <div className="w-auto h-full center md:hidden">
            <button
                onClick={handleClick}
                type="button"
                className="flex items-center justify-center w-auto h-full center p-4">
                {showNavbar ? <BsX size={24} /> : <BsList size={24} />}
            </button>
        </div>
    );
};

export default NavbarBtn;
