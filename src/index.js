import "./index.css"
import React from "react";
import * as ReactDom from "react-dom/client";
import NavBarCar from "./NavBarCar/NavBarCar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Footers/Footer";
import RouterController from "./RouterController";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
        <BrowserRouter>
            <NavBarCar />
                <RouterController />
            <Footer />
        </BrowserRouter>
    </>
);