import { FC } from "react";
// import logo from '../../../assets/images/logo-120x50.png';

interface NavbarLogoProps {
    
}
 
const NavbarLogo: FC<NavbarLogoProps> = () => {
    return (
        <div className="w-auto h-full">
            <img
                className="w-auto h-full"
                src={""}
                alt="logo"
            />
        </div>
    );
}
 
export default NavbarLogo;