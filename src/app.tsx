import React from "react";
import {FC} from "react";
import {hot} from "react-hot-loader";

interface AppProps {}

const App: FC<AppProps> = () => {
    return <h1>Hello World</h1>;
};

export default hot(module)(App);
