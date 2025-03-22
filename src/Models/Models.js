import "./Models.css";
import React, { useState } from "react";
import { ModelsImgData } from "./ModelsImgData";
import {useSpring, animated} from "react-spring";

export default function Models() {
    const [visiblity, setVisiblity] = useState(-1); // -1 indicates no description open

    const handleClick = (Image) => {
        console.log(Image , visiblity)
        // Check if the clicked button is already open (visiblity matches id)
        if (visiblity === Image.id) {
            setVisiblity(-1); // Close the description
        } else {
            setVisiblity(Image.id); // Open the description for the clicked button
            console.log(Image.id , visiblity)
        }
    };

    return (
        <>
            <div className="AllModelsCon">
                {/* Mapping on all photos from ModelsImgData */}
                {ModelsImgData.map((Image) => (
                    <div className="ModelsFlexCon" key={Image.id}>
                        <div className="TModelRoadster">
                            <img src={Image.ImgUrl} alt={Image.alt} className="TRImg" />
                            {Image.PhotoIndex % 2 === 0 &&
                                <button className="LearnMoreDesc" key={Image.PhotoIndex} onClick={()=> handleClick(Image)}> Learn More !!!</button>
                            }
                        </div>
                            <div className="ImgDescCon">
                                {/* Show description only if visiblity matches current image's id */}
                                {visiblity === Image.id && (
                                    <div className={visiblity ? "visiblityDesc" : "hiddenDesc"} key={Image.id}>
                                        {Image.Desc}
                                    </div>
                                )}
                            </div>
                    </div>
                ))}
            </div>

        </>
    );
}
