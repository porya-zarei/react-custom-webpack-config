import {render} from "react-dom";
import App from "./app";
import "./styles/global.scss";

const root: HTMLElement | null = document.getElementById("root");

render(<App />, root);
