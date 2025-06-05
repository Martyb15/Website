import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { selectProjectById } from "../features/projects/projectsSlice";
import ProjectDetail from "../features/projects/ProjectDetail";
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";

const ProjectDetailPage = () => {
    const { projectId } = useParams()
    const project = useSelector(selectProjectById(projectId));
    console.log('project:', project);

    const isLoading = useSelector((state) => state.projects.isLoading); 
    const errMsg = useSelector((state) => state.projects.errMsg);
    let content = null; 

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <ProjectDetail project={project}/>
                <CommentsList projectId={projectId}/>
            </>
        )
    }

    return(
        <Container>
            {project && <SubHeader current={project.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
}

export default ProjectDetailPage;