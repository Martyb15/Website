import { useParams } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { selectProjectById } from '../features/projects/projectsSlice';
import ProjectDetail from '../features/projects/ProjectDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = useSelector(selectProjectById(projectId));

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
                {/* Full-width project detail with architecture diagram */}
                <Row>
                    <ProjectDetail project={project} />
                </Row>

                {/* Comments section below */}
                <Row className="mt-4">
                    <CommentsList projectId={projectId} />
                </Row>
            </>
        );
    }

    return (
        <Container>
            {project && <SubHeader current={project.name} detail={true} titleHidden={true} />}
            {content}
        </Container>
    );
};

export default ProjectDetailPage;