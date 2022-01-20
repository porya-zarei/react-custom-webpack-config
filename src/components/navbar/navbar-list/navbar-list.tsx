import {FC, MouseEventHandler} from "react";
import {NavLink} from "react-router-dom";
import {getRandom} from "../../../utils/helpers";
import {motion, PanInfo, useMotionValue, useSpring} from "framer-motion";
import {useViewContext} from "../../../contexts/view-context/view-context";

const pages = [
    {
        id: getRandom(),
        name: "Home",
        path: "/",
    },
    {
        id: getRandom(),
        name: "About Us",
        path: "/about-us",
    },
    {
        id: getRandom(),
        name: "contact-us",
        path: "/contact-us",
    },
    {
        id: getRandom(),
        name: "Admin",
        path: "/admin",
    },
];

const getNavLinkClassName = ({isActive}: {isActive: boolean}): string => {
    const classNames: string[] = [
        "px-3 py-2 rounded-md text-gray-800 hover:bg-gray-200 w-full md:w-auto",
    ];
    if (isActive) {
        classNames.push("bg-gray-200");
    }
    return classNames.join(" ");
};

interface NavbarListProps {}

const NavbarList: FC<NavbarListProps> = () => {
    const {showNavbar, changeShowNavbar, isMobile} = useViewContext();
    const xPositions = useMotionValue(0);
    const handleDragEnd = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        if (isMobile) {
            console.log(info,xPositions.get());
            if (xPositions.get() < -70) {
                changeShowNavbar(false);
            } else {
            }
        }
    };
    const getListContainerClassName = (): string => {
        const classNames: string[] = [
            "w-9/12 md:w-auto md:h-auto justify-center min-h-screen md:min-h-0 items-start content-start bg-gray-100 md:bg-transparent",
        ];
        if (isMobile) {
            if (showNavbar) {
                classNames.push("flex");
            } else {
                classNames.push("hidden");
            }
        }
        return classNames.join(" ");
    };
    const getContainerClassName = (): string => {
        const classNames: string[] = [
            "md:flex w-full md:h-auto md:w-auto z-2 justify-start items-start bg-slate-800 md:bg-transparent bg-opacity-20 fixed md:static top-0 left-0 md:min-h-0",
        ];
        if (isMobile) {
            if (showNavbar) {
                classNames.push("flex");
            } else {
                classNames.push("hidden");
            }
        }
        return classNames.join(" ");
    };
    const handleContainerClick:MouseEventHandler<HTMLDivElement> = (
        event
    ) => {
        if (event.currentTarget.id === "navbarListContainer") {
            changeShowNavbar(false);
        }
    };
    return (
        <div onClick={handleContainerClick} id="navbarListContainer" className={getContainerClassName()}>
            <motion.div
                drag="x"
                dragConstraints={{left: 0, right: 0}}
                dragElastic={0.5}
                dragMomentum={false}
                dragTransition={{
                    bounceStiffness: 100,
                }}
                style={{
                    x: xPositions,
                }}
                onDragEnd={handleDragEnd}
                className={getListContainerClassName()}>
                <ul className="h-full w-full md:h-auto md:w-auto flex flex-wrap justify-start items-start content-start">
                    {pages.map((page) => (
                        <li key={page.id} className="center md:mr-2 w-full md:w-auto">
                            <NavLink
                                className={getNavLinkClassName}
                                to={page.path}>
                                {page.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default NavbarList;
