import "./Footer.css"
import {Link} from "react-router-dom";
import LogIn from "./../Login/LogIn";
import {AddressIcons, FootersIconAssets} from "./FootersIconAssets";
export default function Footer(){



    return(
        <>
            <div className="CarFooter">
                <div className="CarSectionFooter">
                    {/*Tesla Logo in footers Code*/}
                    <div className="FooterLogo">
                        <img src={require("./../Images/595a8ca3654d420af1fb043fd05976b9.jpg")} alt="Logo" className="FLogo"/>
                    </div>
                    {/*Footer Creators INfo Codes in the bottom*/}
                    <div className="FooterInfos">
                        <div className="FootersText">
                            <div className="FootersTeam">
                                <h1>Kj Developers Team</h1>
                                <p>Kj's Front-end Legendary web-Designs</p>
                            </div>
                        {/*Social Media Icons Codes*/}
                        <ul className="FooterSmedia">
                                {FootersIconAssets.map((Icons) =>{  return(
                                    <li className="SocialMediaIcons" key={Icons.indexNum}>
                                        <img src={Icons.Icon} alt={Icons.alter} />
                                    </li>
                                    )
                                })}
                        {/*    the links in the footer and address bar and help section are in the bottom codes*/}
                        </ul>
                            <div className="LinksToPages">
                                <div className="CompanyAddress">
                                    <address className="AddressInfos">
                                        {/*Address bar*/}
                                        <h1>Address</h1>
                                        {
                                            AddressIcons.map((Ad) =>{  return(
                                                <div key={Ad.KEY}>
                                                    <img src={Ad.AdIcon} alt={Ad.AlterT} key={Ad.KEY}/>
                                                    <h5>{Ad.D_Text}</h5>
                                                </div>
                                            )})
                                        }
                                    </address>
                                {/*    Products part in the bottom*/}
                                </div>
                                <div className="Products">
                                    <h1>Products</h1>
                                    <Link to={LogIn} className="Products_Link">Cars</Link>
                                    <Link to={LogIn} className="Products_Link">SoLaR pAnElS</Link>
                                    <Link to={LogIn} className="Products_Link">Accessories</Link>
                                    <Link to={LogIn} className="Products_Link">Available Colors</Link>
                                </div>
                                {/*Help Section*/}
                                <div className="Help">
                                    <h1>Help</h1>
                                    <div className="Help_Items">FAQ</div>
                                    <div className="Help_Items">Support</div>
                                    <div className="Help_Items">Web_Errors</div>
                                    <div className="Help_Items">Contact_Us</div>
                                </div>
                            </div>
                            {/*CopyRight  in the footer in bottom*/}
                            <div className="CopyRight">
                                <p>All this website Privacy&policy terms is reserved by the Website Domain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}