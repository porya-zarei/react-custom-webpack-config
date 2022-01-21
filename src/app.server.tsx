import {StaticRouter} from "react-router-dom/server";
import App from "./app";

const serverAppRenderer = (url: string): JSX.Element => {
    return (
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
};

export default serverAppRenderer;
