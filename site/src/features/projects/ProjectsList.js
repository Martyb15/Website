import ProjectCard from "./ProjectCard";
import { Row } from "reactstrap";
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

    return (
        <Row>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </Row>
    );
};

export default ProjectsList;