// import ProjectCard, { Projects } from "./ProjectCard";
import ProjectCard from "./ProjectCard"
import { Col, Row } from "reactstrap";
import { selectAllProjects } from "./projectsSlice";
import { useSelector } from "react-redux";

const ProjectsList = () => {
    const projects = useSelector(selectAllProjects);  

    return(
            <Row className="ms-auto"> 
               {projects.map((project) => {
                        return (
                            <Col 
                                md='5' 
                                className='m-4' 
                                key={project.id}
                                // onClick={() => setProjectId(project.id)}
                            >
                                <ProjectCard project={project} />
                            </Col>
                        );
                    })}
            </Row>


    );
};
export default ProjectsList;