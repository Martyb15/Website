import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { selectProjectById } from "../features/projects/projectsSlice";
import ProjectDetail from "../features/projects/ProjectDetail";
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const ProjectDetailPage = () => {
    const { projectId } = useParams()
    const project = selectProjectById(projectId);

    return(
        <Container>
            <SubHeader current={project.name} detail={true} />
            <Row>
                <ProjectDetail project={project}/>
                <CommentsList projectId={projectId}/>
            </Row>
        </Container>
    );
}

export default ProjectDetailPage;