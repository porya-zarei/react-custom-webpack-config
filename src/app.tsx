import {FC} from "react";
import {hot} from "react-hot-loader";
import Pages from "./pages/pages";

interface AppProps {}

const App: FC<AppProps> = () => {
    return <Pages />;
};

export default hot(module)(App);
