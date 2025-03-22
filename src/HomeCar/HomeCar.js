import React, { useEffect, useState } from 'react';
import {BgPhotosHome} from "./BgPhotosHome";
import "./HomeCar.css"
import {Link} from "react-router-dom";
// import SignUp from "../LogIn_SignUp/SignUp";
import LogIn from "../Login/LogIn";
import LearnMore from "./../LearnMore/LearnMore";



export default function HomeCar(){

    const OrderImages = [{
        Phts: require("./../Images/tesla_cybertruck_cool-1920x1080.jpg")
    },{
        Phts: require("./../Images/shubham-sharan-qKAKAoxPCr8-unsplash (1).jpg")
    },{
        Phts: require("./../Images/880567.jpg")
    }]

    const[images , setImages] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);


    function scrollChanger(){
        setScrollPosition(scrollPosition)

    }

    useEffect( () => {
        window.addEventListener("scroll" , scrollChanger);
        const sYChange = window.scrollY;
        if (sYChange >= 3700) {
            setImages(1);
        } else if (sYChange >= 3710) {
            setImages(2);
        } else if (sYChange >= 3720) {
            setImages(3);
        }

        return() => {
            window.removeEventListener('scroll' , scrollChanger)
        }
    },[scrollPosition])


    return(
        <>
            {/*the main background*/}

            <div className="HomeCarBgCon">
                <img src={require("./../Images/img_0623.jpg")} alt="TESLA" className="BgHome"/>
            </div>

            {/*these codes are for images and texts after HomeCarBgCon*/}

            <hr className="HomeCarHr"/>
            {BgPhotosHome.map( (Photos) => {
                return(
                    <div className="HomeCarTxtCon">
                        <div className="HomeCarTxtRow">
                            <div className="HomeCarTxtClmn">
                                <div className="TxtBrdr">
                                    {Photos.Desc}
                                </div>
                            </div>
                            <div className="HomeCarTxtClmnImg">
                                <img src={Photos.img} alt={Photos.alt} className={Photos.className}/>
                            </div>
                        </div>
                    </div>
                )
                }
            )
            }

            {/*this code is for background Scroll Change*/}
    <div className="ScrollChangeBg">
            <div style={{ backgroundImage: `url(${OrderImages[images].Phts})`,
                height: "100vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center"}}>
            </div>

            <button className="OrderNowBtn">
                <Link className="OrderNowBtnLink" to={'/LogIn'}> Order Now</Link>
            </button>
    </div>
            <LearnMore />
        </>
    )

}




