import {render} from "react-dom";
import ClientAppRenderer from "./app.client";
import "./styles/global.scss";

const root: HTMLElement | null = document.getElementById("root");
render(<ClientAppRenderer />, root);
