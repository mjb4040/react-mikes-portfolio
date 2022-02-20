import React from "react";

const AboutMe = () => (
  <div>
    <div className = "about">
    <h2>About Me</h2>
    </div>
    <div className = "about">
    <img
            src={require(`../../assets/small/headshot.jpeg`).default}
            alt="profile"
            className="profimg"
            key="profile"
    />
    </div>
    <div className = "about">
    <p>
    A demonstrated ability to communicate complex issues to diverse stakeholders including executive leadership, program managers, technical leads, and business-area specialists.  Experienced in preparing and presenting briefings to obtain consensus on policies, budget, new technologies, and systems integration/modernization. A former Marine Corps Signals Intelligence (SIGINT) analyst and a veteran of multiple deployments supporting conventional and special operations forces in Iraq, Afghanistan, Turkey, and Liberia.
    </p>
    </div>
  </div>
);

export default AboutMe;