import {hydrate} from "react-dom";
import clientAppRenderer from "./app.client";
import "./styles/global.scss";

const root: HTMLElement | null = document.getElementById("root");
hydrate(clientAppRenderer(), root);