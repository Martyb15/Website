import { Col } from 'reactstrap';
import ARCHITECTURE_DIAGRAMS from '../../app/shared/ArchitectureDiagrams';
import ArchitectureDiagram from './ArchitectureDiagram';
import './ProjectDetail.css';

const ProjectDetail = ({ project }) => {
    if (!project) return null;

    const {
        id, name, description, techStack = [], highlights = [],
        repoUrl, demoUrl, writeupUrl, testsEvidenceUrl, tagline
    } = project;

    const diagram = ARCHITECTURE_DIAGRAMS[id];
    const hasDiagram = Boolean(diagram);

    /* Build links object */
    const links = {
        repo: repoUrl || '',
        demo: demoUrl || '',
        report: writeupUrl || '',
        tests: testsEvidenceUrl || '',
    };
    const hasLinks = Object.values(links).some(Boolean);

    return (
        <Col xs="12" className="pd-root">
            {/* ── Header ── */}
            <div className="pd-header">
                {diagram?.tagline && (
                    <span className="pd-badge">Project Deep Dive</span>
                )}
                <h1 className="pd-title">{name}</h1>
                {(diagram?.tagline || tagline) && (
                    <p className="pd-tagline">{diagram?.tagline || tagline}</p>
                )}
                {techStack.length > 0 && (
                    <div className="pd-chips">
                        {techStack.map((tech, i) => (
                            <span key={i} className="pd-chip">{tech}</span>
                        ))}
                    </div>
                )}
            </div>

            <hr className="pd-divider" />

            {/* ── Two-column content (or single column if no diagram) ── */}
            <div className={hasDiagram ? 'pd-grid' : 'pd-grid pd-grid--single'}>
                {/* Architecture diagram (left column) */}
                {hasDiagram && (
                    <div className="pd-section-card pd-section-card--arch">
                        <div className="pd-section-label pd-section-label--primary">
                            Architecture Walkthrough
                        </div>
                        <ArchitectureDiagram steps={diagram.steps} />
                    </div>
                )}

                {/* Info column (right, or full-width if no diagram) */}
                <div className="pd-info-col">
                    {/* Overview */}
                    <div className="pd-section-card">
                        <div className="pd-section-label pd-section-label--secondary">
                            Overview
                        </div>
                        <p className="pd-description">{description}</p>
                    </div>

                    {/* Highlights */}
                    {highlights.length > 0 && (
                        <div className="pd-section-card">
                            <div className="pd-section-label">Key Highlights</div>
                            <ul className="pd-highlights">
                                {highlights.map((h, i) => (
                                    <li key={i} className="pd-highlight-item">
                                        <span className="pd-highlight-dot" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Proof links */}
                    {hasLinks && (
                        <div className="pd-links">
                            {links.repo && (
                                <a href={links.repo} target="_blank" rel="noreferrer" className="pd-link pd-link--dark">
                                    <i className="fa fa-github" /> GitHub Repo
                                </a>
                            )}
                            {links.demo && (
                                <a href={links.demo} target="_blank" rel="noreferrer" className="pd-link pd-link--dark">
                                    <i className="fa fa-play-circle" /> Demo
                                </a>
                            )}
                            {links.tests && (
                                <a href={links.tests} target="_blank" rel="noreferrer" className="pd-link pd-link--outline">
                                    <i className="fa fa-check-circle" /> Tests
                                </a>
                            )}
                            {links.report && (
                                <a href={links.report} target="_blank" rel="noreferrer" className="pd-link pd-link--outline">
                                    <i className="fa fa-file-text" /> Report
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Col>
    );
};

export default ProjectDetail;