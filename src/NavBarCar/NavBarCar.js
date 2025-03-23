import "./NavBarCar.css"
import {Link} from "react-router-dom";
import  SignUp  from "./../SignUp/SignUp";
import LogIn from "./../Login/LogIn";
import {WebSiteRoutes} from "../WebSiteRoutes";

export default function NavBarCar(){



    return(
        <>
            <div className="WholeNavCon">    {/*this must get margined when the client hovers on and the place client hovers must get wided so much and get bringed on other */}

                {/*left side is here in the bottom*/}

                <div className="NavLeftSide">
                    <div className="KjIcon">
                        <img src={require("./../Images/892143.webp")} alt="" className="KjIconImg" loading="lazy" />
                    </div>

                    <div className="LogInNavCar"> <Link className="LOSIGNLink" to={'/LogIn'}> Log In </Link></div>
                    <div className="SignUpNAvCar"> <Link className="LOSIGNLink" to={'/SignUp'}> Sign Up </Link></div>
                </div>

                {/*right side is here in the bottom*/}

                <div className="NavRightSide">
                    <ul className="NavLeftSideUl">
                        {WebSiteRoutes.map((Route , index) =>{return(
                            <li key={Route.index}> <Link to={Route.path} className="LOSIGNLink">{Route.element}</Link> </li>
                        )})}
                    </ul>
                </div>
            </div>
        </>
    )
}

/*in this Component we have rendered the Navigation Bar menu which is placed always in top of the Web*/
