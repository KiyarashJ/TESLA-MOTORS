import React from "react";
import CoFounderCard from "./CoFounderCard";
import { CoFounderss } from "./CoFoundersData";
import "./CoFounders.css";

function CoFounders() {
  return (
      <section className="cofounders-section">
        <h2>CoFounders:</h2>
      <div className="cofounders-grid">
        {CoFounderss.map((founder) => (
          <CoFounderCard key={founder.id} founder={founder} />
        ))}
      </div>
    </section>
  );
}

export default CoFounders;