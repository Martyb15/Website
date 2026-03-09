import { Col, Row, Container } from "reactstrap";
import SkillsList from "../features/skills/SkillsList";
import SubHeader from "../components/SubHeader";
import '../features/projects/ProjectDetail.css';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About Me" />

            <Row className="mb-5">
                {/* Left: Bio */}
                <Col lg="7" className="mb-4">
                    <div className="pd-section-card" style={{ borderTop: '3px solid var(--primary-color)' }}>
                        <div className="pd-section-label pd-section-label--primary">Who I Am</div>
                        <p className="pd-description">
                            I'm a recent CS grad (Liberty University, Cybersecurity concentration)
                            based in Orange County, CA. I build backend APIs and security tooling
                            with Python and Node, and I care about things actually working and
                            being secure.
                        </p>
                        <p className="pd-description" style={{ marginTop: '1rem' }}>
                            Before graduating I spent time teaching programming at The Coder School,
                            where I managed ~25 students weekly and wrote session notes breaking down
                            technical concepts. That experience made me a better communicator and a
                            better code reader.
                        </p>
                        <p className="pd-description" style={{ marginTop: '1rem' }}>
                            I'm looking for junior backend, security/AppSec-adjacent, or SDET roles.
                            If you want to see what I've built, the{' '}
                            <a href="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>homepage</a> has
                            my flagship projects with repos and demos.
                        </p>
                    </div>
                </Col>

                {/* Right: At a Glance */}
                <Col lg="5" className="mb-4">
                    <div className="pd-section-card" style={{ borderTop: '3px solid var(--secondary-color)' }}>
                        <div className="pd-section-label pd-section-label--secondary">At a Glance</div>
                        <table style={{ width: '100%', fontSize: '0.92rem' }}>
                            <tbody>
                                {[
                                    ['Location', 'Yorba Linda, CA'],
                                    ['Degree', 'B.S. Computer Science (Cybersecurity)'],
                                    ['University', 'Liberty University'],
                                    ['Graduated', 'May 2025'],
                                    ['Targeting', 'Backend, AppSec, SDET'],
                                    ['Open to', 'Remote, hybrid, or onsite'],
                                ].map(([label, value], i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <td style={{
                                            padding: '10px 12px 10px 0',
                                            fontWeight: 600,
                                            color: 'var(--text-dark)',
                                            whiteSpace: 'nowrap',
                                            width: '40%',
                                        }}>
                                            {label}
                                        </td>
                                        <td style={{
                                            padding: '10px 0',
                                            color: 'var(--text-light)',
                                        }}>
                                            {value}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td style={{
                                        padding: '10px 12px 10px 0',
                                        fontWeight: 600,
                                        color: 'var(--text-dark)',
                                    }}>
                                        GitHub
                                    </td>
                                    <td style={{ padding: '10px 0' }}>
                                        <a href="https://github.com/Martyb15" target="_blank" rel="noreferrer"
                                           style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                                            Martyb15
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Quote */}
                    <div className="pd-section-card" style={{ marginTop: '20px' }}>
                        <blockquote style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-light)', lineHeight: 1.7 }}>
                            <p style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                                "I realized that collecting intelligence and understanding
                                what an adversary's motivations are and where they're headed
                                is fundamental to cybersecurity."
                            </p>
                            <footer style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
                                — Dmitri Alperovitch, CrowdStrike Co-Founder
                            </footer>
                        </blockquote>
                    </div>
                </Col>
            </Row>

            {/* Skills Section */}
            <Row className="mb-4">
                <Col xs="12">
                    <div className="pd-section-label pd-section-label--primary" style={{ fontSize: '0.8rem' }}>
                        Technical Skills
                    </div>
                </Col>
                <Col xs="12">
                    <SkillsList />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;