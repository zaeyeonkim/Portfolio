import React, { useState } from 'react';
import Home from './TabComponent/Home';
import About from './TabComponent/About';
import Skill from './TabComponent/Skill';
import Project from './TabComponent/Project';
import '../css/CenterTab.css';

/* Image */
import homeIcon from './images/home.png';
import aboutIcon from './images/about.png';
import skillIcon from './images/skill.png';
import projectIcon from './images/project.png';
import downIcon from './images/down.png';
import moreIcon from './images/more.png';

const CenterTab = ({ activeTab, setActiveTab }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const tabs = [
    { label: <><img src={homeIcon} alt="Home Icon" /> Home.jsx</>, content: <Home /> },
    { label: <><img src={aboutIcon} alt="About Icon" /> About.html</>, content: <About /> },
    { label: <><img src={skillIcon} alt="Skill Icon" /> Skill.css</>, content: <Skill /> },
    { label: <><img src={projectIcon} alt="Project Icon" /> Project.js</>, content: <Project /> }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="ctab_container">
      <h1><em>EXPLORER</em> <img className='more' src={moreIcon} alt='more Icon'/></h1>
      <div className='portfolio'>
        <button onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}>
                <img className={`down ${isExpanded ? 'rotated' : ''}`} src={downIcon} alt="Down Icon" /> PORTFOLIO
        </button>
        {isExpanded && (
        <div className="ctab_buttons">
            {tabs.map(({ label }, index) => (
            <button key={index} className={`ctab_button ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                {label}
            </button>
            ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default CenterTab;
