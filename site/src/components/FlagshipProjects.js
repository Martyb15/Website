import { Container, Row } from 'reactstrap';
import FlagshipProjectCard from './FlagshipProjectCard';
import FLAGSHIP_PROJECTS from '../app/shared/FlagshipProjects';

const FlagshipProjects = () => {
    return (
        <section className="flagship-section">
            <Container>
                <h2 className="section-heading">Flagship Projects</h2>
                <p className="section-sub">
                    Selected work with repos, demos, and test evidence.
                    <a href="/directory" className="ms-1">View all projects &rarr;</a>
                </p>
                <Row>
                    {FLAGSHIP_PROJECTS.map((project) => (
                        <FlagshipProjectCard key={project.id} project={project} colSize="6" />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FlagshipProjects;