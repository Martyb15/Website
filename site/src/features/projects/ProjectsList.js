// import ProjectCard, { Projects } from "./ProjectCard";
import ProjectCard from "./ProjectCard"
import { Col, Row } from "reactstrap";
import { selectAllProjects } from "./projectsSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";


const ProjectsList = () => {
    const projects = useSelector(selectAllProjects); 
    const isLoading = useSelector((state) => state.projects.isLoading);
    const errMsg = useSelector((state) => state.projects.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

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