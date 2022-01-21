import { FC } from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./app";

const ClientAppRenderer:FC = ()=> {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default ClientAppRenderer;
