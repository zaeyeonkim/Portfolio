import React from 'react';
import Home from './TabComponent/Home';
import About from './TabComponent/About';
import Skill from './TabComponent/Skill';
import Project from './TabComponent/Project';
import '../css/Tab.css';

/* Image */
import homeIcon from './images/home.png';
import aboutIcon from './images/about.png';
import skillIcon from './images/skill.png';
import projectIcon from './images/project.png';

const Tab = ({ activeTab, setActiveTab }) => {

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
    <div className="tab_container">
      <div className="tab_buttons">
        {tabs.map(({ label }, index) => (
          <button key={index} className={`tab_button ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
            {label}
          </button>
        ))}
      </div>

      <div className="tab_contents">
        {tabs.map(({ content }, index) => (
          <div key={index} className={`tab_content ${activeTab === index ? 'active' : ''}`}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
