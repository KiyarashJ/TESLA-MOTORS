import React from "react";
import "./LearnMore.css";
import {Link} from "react-router-dom";
import LogIn from "./../Login/LogIn";

export  default function LearnMore(){

    return(
        <>

            <div className="LearnmoreCom">
                <div className="LearnMore">
                    <img className="LMIMG" src={require("./../Images/Tesla-house-model-s-powerwall-solar-roof1-e1541152124970.webp")} alt="Solar panels" loading="lazy" />
                    <p className="LMP">SoLaR pAnElS</p>
                </div>
                <button className="LMBtn"><Link className="LMbtnLink" to={'/LearnMore'}> Learn More </Link></button>
            </div>

        </>
    )
}