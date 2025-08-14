import React from 'react';
import './Project.css';

const ProjectCard = ({ head, image, link, text }) => {
  return (
    <div className="project-card-container">
      <div className="card project-card h-100">
        <div className="card-image-container">
          <img src={image} className="card-img-top" alt={head} />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{head}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
