import Home from "./HomeCar/HomeCar";
import Models from "./Models/Models";
import TechnicalSpecs from "./TechnicalSpecs/TechnicalSpecs";
import Discover from "./Discover/Discover";
import CoFounders from "./CoFounders/CoFounders";
import React from "react";
import LogIn from "./Login/LogIn";
import SignUp from "./SignUp/SignUp";
import SolarPanels from "./LearnMore/SolarPanels/SolarPanels";

export const Routes = [
    {  path:"/" ,element:<Home/>},

    { path:"/Models" ,element:<Models/>},

    { path:"/TechnicalSpecs" ,element:<TechnicalSpecs/>},

    { path:"/Discover" ,element:<Discover/>},

    { path:"/CoFounders" ,element:<CoFounders/>},

    { path:"/LogIn" ,element:<LogIn/>},
    
    { path:"/SignUp" ,element:<SignUp />},
    
    { path:"/LearnMore" ,element:<SolarPanels />},
]
/*in this Component we have obtained the all Routes in an iterable Array[object]
to get rendered in RouterController.js Component */