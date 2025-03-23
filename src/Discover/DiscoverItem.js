import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Discover.css";

function DiscoverItem({ feature, isExpanded, toggleExpand }) {
  
  const cardAnimation = useSpring({
    transform: isExpanded ? "scale(1.05)" : "scale(1)",
    boxShadow: isExpanded
      ? "0 10px 30px rgba(0, 0, 0, 0.3)"
      : "0 5px 15px rgba(0, 0, 0, 0.1)",
    config: { tension: 200, friction: 20 },
  });

  
  const descAnimation = useSpring({
    opacity: isExpanded ? 1 : 0,
    maxHeight: isExpanded ? "800px" : "0px", 
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={cardAnimation}
      className="discover-item"
      onClick={toggleExpand}
    >
      <img src={feature.img} alt={feature.title} loading="lazy" className="discover-img" />
      <h3>{feature.title}</h3>
      <animated.p style={descAnimation} className="discover-desc">
        {feature.description}
      </animated.p>
    </animated.div>
  );
}

export default DiscoverItem;