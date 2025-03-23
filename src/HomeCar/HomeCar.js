import {BgPhotosHome} from "./BgPhotosHome";
import "./HomeCar.css"
import {Link} from "react-router-dom";
import LearnMore from "./../LearnMore/LearnMore";



export default function HomeCar(){

    const OrderImages = [{
        Phts: require("./../Images/tesla_cybertruck_cool-1920x1080.jpg")
    }]


    return(
        <>
            {/*the main background*/}

            <div className="HomeCarBgCon">
                <img src={require("./../Images/img_0623.jpg")} loading="lazy" alt="TESLA" className="BgHome"/>
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
                                <img src={Photos.img} alt={Photos.alt} className={Photos.className} loading="lazy" />
                            </div>
                        </div>
                    </div>
                )
                }
            )
            }

            {/*this code is for background Scroll Change*/}
    <div className="ScrollChangeBg">
            <img src={OrderImages[0].Phts} className="CyberTruckImg" loading="lazy" />
            <button className="OrderNowBtn">
                <Link className="OrderNowBtnLink" to={'/LogIn'}> Order Now</Link>
            </button>
    </div>
            <LearnMore />
        </>
    )

}




