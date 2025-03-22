import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./TechnicalSpecs.css";

function PerformanceItem({ data, isOpen, toggleModal }) {
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
  });

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.9)",
    config: { tension: 200, friction: 20 },
  });

  const backdropAnimation = useSpring({
    opacity: isOpen ? 0.8 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="spec-container">
      <animated.section style={imageAnimation} className="ImageCon">
        <img src={data.img} alt={data.name} />
        <button className="toggleBtn" onClick={toggleModal}>
          {isOpen ? "close" : "open"}
        </button>
      </animated.section>

      
      {isOpen && (
        <>    
          <animated.div
            style={backdropAnimation}
            className="modal-backdrop"
            onClick={toggleModal} 
          />

          
          <animated.section style={modalAnimation} className="performance-modal">
            <h2>{data.name}</h2>
            <div className="perf-grid">
              <div className="perf-item">
                <i className="fas fa-bolt"></i>
                <h3>acceleration:</h3>
                <p>{data.acceleration}</p>
              </div>
              <div className="perf-item">
                <i className="fas fa-tachometer-alt"></i>
                <h3>speed:</h3>
                <p>{data.speed} KM/H</p>
              </div>
              <div className="perf-item">
                <i className="fas fa-battery-full"></i>
                <h3>circuit_board:</h3>
                <p>{data.circuit_board} KM</p>
              </div>
            </div>
            <button className="close-btn" onClick={toggleModal}>
              close
            </button>
          </animated.section>
        </>
      )}
    </div>
  );
}

export default PerformanceItem;