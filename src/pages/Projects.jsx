import ProjectCard from '../components/projectCard';
import project2 from '../assets/project2.jpeg';
import project1 from '../assets/project1.jpeg';

const projects = [
  {
    projectTitle: 'Memory Game',
    projectName: 'Project One Description',
    projectImg: project1,
  },
  {
    projectTitle: 'Movie site',
    projectName: 'Project Two Description',
    projectImg: project2,
  },
];

const Projects = () => {
  return (
    <div className="projects container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.projectTitle}
          projectName={project.projectName}
          projectImg={project.projectImg}
        />
      ))}
    </div>
  );
};

export default Projects;