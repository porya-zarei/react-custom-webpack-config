import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainContextProvider from "../contexts/main-context/main-context";
import ViewContextProvider from "../contexts/view-context/view-context";
import DefaultLayout from "../layout/layout";
import AboutUsPage from "./about-us/about-us-page";
import HomePage from "./home/home-page";
interface PagesProps {}

const Pages: FC<PagesProps> = () => {
    return (
        <MainContextProvider>
            <ViewContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/admin" element={<h1>hi eadmin</h1>} />
                        <Route path="/" element={<DefaultLayout />}>
                            <Route path="" element={<HomePage />} />
                            <Route path="/about-us" element={<AboutUsPage />} />
                        </Route>
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </BrowserRouter>
            </ViewContextProvider>
        </MainContextProvider>
    );
};

export default Pages;
