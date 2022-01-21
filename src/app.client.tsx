import {BrowserRouter} from "react-router-dom";
import App from "./app";

const clientAppRenderer = ():JSX.Element => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default clientAppRenderer;
