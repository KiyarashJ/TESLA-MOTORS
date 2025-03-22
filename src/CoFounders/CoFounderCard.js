import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./CoFounders.css";

function CoFounderCard({ founder }) {
  const [isHovered, setIsHovered] = useState(false);

  
  const cardAnimation = useSpring({
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    width: isHovered ? "50%" : "40%",
    boxShadow: isHovered
      ? "0 15px 40px rgba(255, 255, 255, 0.5)"
      : "0 5px 20px rgba(0, 0, 0, 0.2)",
    config: { tension: 250, friction: 20 },
  });

  
  const bioAnimation = useSpring({
    opacity: isHovered ? 1 : 0,
    maxHeight: isHovered ? "400px" : "0px",
    config: { tension: 200, friction: 25 },
  });

  return (
    <animated.div
      style={cardAnimation}
      className="founder-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={founder.img} alt={founder.name} className="founder-img" />
      <h3>{founder.name}</h3>
      <p className="founder-role">{founder.role}</p>
      <animated.p style={bioAnimation} className="founder-bio">
        {founder.bio}
      </animated.p>
    </animated.div>
  );
}

export default CoFounderCard;