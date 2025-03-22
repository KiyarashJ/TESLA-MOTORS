import React, {useState, useEffect} from "react";
import { LearnMoreAssets } from "./LearnMoreAssets";
import "./SolarPanels.css"

export default function SolarPanels() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % LearnMoreAssets.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [LearnMoreAssets]);


    return (
    <>
        <div className="body">
            <div className="Con">
                    <img className="img"
                      src={LearnMoreAssets[currentIndex].Image} 
                      alt={LearnMoreAssets[currentIndex].Title}
                    />
            </div>
        </div>
    </>
    )
}


