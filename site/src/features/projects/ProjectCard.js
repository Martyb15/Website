import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, name, description, techStack = [], highlights = [], repoUrl, demoUrl, writeupUrl, testsEvidenceUrl } = project;

    /* Build the links object from the API's flat URL fields */
    const links = {
        repo: repoUrl || '',
        demo: demoUrl || '',
        report: writeupUrl || '',
        tests: testsEvidenceUrl || '',
    };

    const hasProofLinks = Object.values(links).some(Boolean);

    return (
        <Col md="4" className="mb-4">
            <Link to={`${id}`} style={{ textDecoration: 'none' }}>
                <div className="flagship-card directory-card">
                    <h3 className="flagship-title">{name}</h3>
                    <p className="flagship-desc">{description}</p>

                    {/* Tech chips */}
                    {techStack.length > 0 && (
                        <div className="flagship-chips">
                            {techStack.map((tech, i) => (
                                <span key={i} className="flagship-chip">{tech}</span>
                            ))}
                        </div>
                    )}

                    {/* Highlight bullets (if populated) */}
                    {highlights.length > 0 && (
                        <ul className="flagship-bullets">
                            {highlights.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}

                    {/* Proof links row — stop propagation so they open externally */}
                    {hasProofLinks && (
                        <div className="flagship-proof">
                            {links.repo && (
                                <a href={links.repo} target="_blank" rel="noreferrer" className="proof-link"
                                   onClick={(e) => e.stopPropagation()}>
                                    <i className="fa fa-github" /> Repo
                                </a>
                            )}
                            {links.demo && (
                                <a href={links.demo} target="_blank" rel="noreferrer" className="proof-link"
                                   onClick={(e) => e.stopPropagation()}>
                                    <i className="fa fa-play-circle" /> Demo
                                </a>
                            )}
                            {links.tests && (
                                <a href={links.tests} target="_blank" rel="noreferrer" className="proof-link"
                                   onClick={(e) => e.stopPropagation()}>
                                    <i className="fa fa-check-circle" /> Tests
                                </a>
                            )}
                            {links.report && (
                                <a href={links.report} target="_blank" rel="noreferrer" className="proof-link"
                                   onClick={(e) => e.stopPropagation()}>
                                    <i className="fa fa-file-text" /> Report
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </Link>
        </Col>
    );
};

export default ProjectCard;