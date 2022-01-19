import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainContextProvider from "../contexts/main-context/main-context";
import DefaultLayout from "../layout/layout";
import HomePage from "./home-page";
interface PagesProps {}

const Pages: FC<PagesProps> = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/admin" element={<h1>hi eadmin</h1>} />
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="" element={<HomePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Pages;
