import { Col } from 'reactstrap';

const FlagshipProjectCard = ({ project, colSize = "6" }) => {
    const { title, description, techStack, bullets, links } = project;

    return (
        <Col md={colSize} className="mb-4">
            <div className="flagship-card">
                <h3 className="flagship-title">{title}</h3>
                <p className="flagship-desc">{description}</p>

                {/* Tech chips */}
                <div className="flagship-chips">
                    {techStack.map((tech, i) => (
                        <span key={i} className="flagship-chip">{tech}</span>
                    ))}
                </div>

                {/* Highlight bullets */}
                <ul className="flagship-bullets">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>

                {/* Proof row — only renders links that have a URL */}
                <div className="flagship-proof">
                    {links.repo && (
                        <a href={links.repo} target="_blank" rel="noreferrer" className="proof-link">
                            <i className="fa fa-github" /> Repo
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noreferrer" className="proof-link">
                            <i className="fa fa-play-circle" /> Demo
                        </a>
                    )}
                    {links.tests && (
                        <a href={links.tests} target="_blank" rel="noreferrer" className="proof-link">
                            <i className="fa fa-check-circle" /> Tests
                        </a>
                    )}
                    {links.report && (
                        <a href={links.report} target="_blank" rel="noreferrer" className="proof-link">
                            <i className="fa fa-file-text" /> Report
                        </a>
                    )}
                    {links.live && (
                        <a href={links.live} target="_blank" rel="noreferrer" className="proof-link">
                            <i className="fa fa-external-link" /> Live
                        </a>
                    )}
                </div>
            </div>
        </Col>
    );
};

export default FlagshipProjectCard;










