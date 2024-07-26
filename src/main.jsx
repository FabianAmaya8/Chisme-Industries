import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/General.css"
import { Encabesado } from "./Fijo/header"
import { Main } from "./components/main-cuerpo";
import { Pie } from "./Fijo/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
<>
    <Encabesado />
    <Main/>
    <Pie />
</>);
