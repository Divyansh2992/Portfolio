import { useState } from 'react';
import './Skills.css';

export default function Skills(){
    const [activeTab, setActiveTab] = useState('programming');

    const programmingLanguages = [
        { name: "Python", logo: "images/Python-logo.svg" },
        { name: "C", logo: "images/C_Programming_Language.svg.png" },
        { name: "C++", logo: "images/ISO_C++_Logo.svg.png" },
        { name: "Java", logo: "images/java.png" },
        { name: "JavaScript", logo: "images/javascript.webp" }
    ];

    const techStacks = [
        { name: "Node.js", logo: "images/node.png" },
        { name: "Express", logo: "images/express.png" },
        { name: "MongoDB", logo: "images/mongo.png" },
        { name: "React", logo: "images/react.png" },
        { name: "MySQL", logo: "images/mysql.png" },
        { name: "HTML", logo: "images/html.png" },
        { name: "CSS", logo: "images/css.png" },
        { name: "GitHub", logo: "images/GitHub-Logo.png" },
        { name: "Figma", logo: "images/figma.jpeg" },
        { name: "Canva", logo: "images/canva.jpg" },
        { name: "Arduino", logo: "images/arduino.png" },
        { name: "ROS", logo: "images/ROS.png" },
        { name: "Gazebo", logo: "images/gazebo.png" },
        { name: "MATLAB", logo: "images/matlab.jpeg" }
    ];

    const softSkills = [
        "Leadership",
        "Team Work", 
        "Design Thinking",
        "Event Management",
        "Problem Solving",
        "Communication"
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'programming':
                return (
                    <div className="skills-grid">
                        {programmingLanguages.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'techstacks':
                return (
                    <div className="skills-grid">
                        {techStacks.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'softskills':
                return (
                    <div className="soft-skills-grid">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="soft-skill-item">
                                <span className="soft-skill-name">{skill}</span>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return(
        <div className="container-fluid mt-5" id="skills">
            <h1 className="text-center mb-5">Skills</h1>
            
            {/* Skills Tabs */}
            <div className="skills-tabs mb-5">
                <div className="tab-container">
                    <button 
                        className={`tab-button ${activeTab === 'programming' ? 'active' : ''}`}
                        onClick={() => setActiveTab('programming')}
                    >
                        Programming Languages
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'techstacks' ? 'active' : ''}`}
                        onClick={() => setActiveTab('techstacks')}
                    >
                        Tech Stacks and Tools
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'softskills' ? 'active' : ''}`}
                        onClick={() => setActiveTab('softskills')}
                    >
                        Soft Skills
                    </button>
                </div>
            </div>

            {/* Skills Content */}
            <div className="skills-content">
                {renderContent()}
            </div>
        </div>
    )
}