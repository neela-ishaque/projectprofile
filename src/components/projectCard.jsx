import { useState } from 'react';
import ImageExpand from './imageExpand';
import './projectCard.css'
const ProjectCard = ({ projectTitle, projectName, projectImg }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  const handleOverlayClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className="project-card" onClick={handleImageClick}>
        <div className='textContent'>
        <h2 className="project-title">{projectTitle}</h2>
        <p className="project-name">{projectName}</p>
        </div>
        <div className='imgContent'>
        <img className="project-img" src={projectImg} alt={projectTitle} />
      </div>
      </div>
      {isExpanded && (
        <ImageExpand
          image={projectImg}
          onOverlayClick={handleOverlayClick}
        />
      )}
    </>
  );
};

export default ProjectCard;