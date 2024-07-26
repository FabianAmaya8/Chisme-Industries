import React from "react";
import ReactDOM from "react-dom/client";
import { Encabesado } from "./Fijo/header"
import { Normal } from "./components/normal";
import { Pie } from "./Fijo/footer";
import "./CSS/General.css"

ReactDOM.createRoot(document.getElementById("headers")).render(
<React.StrictMode>
    <Encabesado />
</React.StrictMode>);
ReactDOM.createRoot(document.getElementById("contenido")).render(
<React.StrictMode>
    <Normal/>
</React.StrictMode>);
ReactDOM.createRoot(document.getElementById("footers")).render(
<React.StrictMode>
    <Pie />
</React.StrictMode>);
