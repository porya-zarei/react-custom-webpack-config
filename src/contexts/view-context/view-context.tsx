import {
    Context,
    createContext,
    FC,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

interface IViewContext {
    showNavbar: boolean;
    changeShowNavbar: (value: SetStateAction<boolean>) => void;
    isMobile: boolean;
}

interface ViewContextProviderProps {}

const ViewContext: Context<IViewContext> = createContext({} as IViewContext);

const ViewContextProvider: FC<ViewContextProviderProps> = ({children}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [showNavbar, setShowNavbar] = useState<boolean>(
        isMobile ? false : true,
    );

    const changeShowNavbar = useCallback(
        (value: SetStateAction<boolean>): void => {
            setShowNavbar(value);
        },
        [],
    );
    useEffect(() => {
        const handleResize = (): void => {
            setIsMobile(window?.innerWidth < 768 ?? false);
            setShowNavbar(false);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const context: IViewContext = useMemo<IViewContext>(
        () => ({
            showNavbar,
            changeShowNavbar,
            isMobile,
        }),
        [showNavbar, isMobile, changeShowNavbar],
    );
    return (
        <ViewContext.Provider value={context}>{children}</ViewContext.Provider>
    );
};

export default ViewContextProvider;

export const useViewContext = (): IViewContext => {
    return useContext(ViewContext);
};
