import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SkillsList from "../features/skills/SkillsList";
import SubHeader from "../components/SubHeader";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About Me" />

            <Row className="row-content">
                <Col sm="6">
                    <h3>Who I Am</h3>
                    <p>
                        I'm a recent CS grad (Liberty University, Cybersecurity concentration)
                        based in Orange County, CA. I build backend APIs and security tooling
                        with Python and Node, and I care about things actually working and 
                        being secure. 
                        
                    </p>
                    <p>
                        Before graduating I spent time teaching programming at The Coder School,
                        where I managed ~25 students weekly and wrote session notes breaking down
                        technical concepts. That experience made me a better communicator and a
                        better code reader.
                    </p>
                    <p>
                        I'm looking for junior backend, security/AppSec-adjacent, or SDET roles.
                        If you want to see what I've built, the{' '}
                        <a href="/">homepage</a> has my flagship projects with repos and demos.
                    </p>
                </Col>

                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-secondary text-white">
                            <h3>At a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Location</dt>
                                <dd className="col-6">Yorba Linda, CA</dd>

                                <dt className="col-6">Degree</dt>
                                <dd className="col-6">B.S. Computer Science (Cybersecurity), Liberty University</dd>

                                <dt className="col-6">Graduated</dt>
                                <dd className="col-6">May 2025</dd>

                                <dt className="col-6">GitHub</dt>
                                <dd className="col-6">
                                    <a href="https://github.com/Martyb15" target="_blank" rel="noreferrer">
                                        Martyb15
                                    </a>
                                </dd>

                                <dt className="col-6">Targeting</dt>
                                <dd className="col-6">Backend, AppSec, SDET</dd>

                                <dt className="col-6">Open to</dt>
                                <dd className="col-6">Remote, hybrid, or onsite</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row className="row-content">
                <Col className="col-12">
                    <h3>Skills</h3>
                </Col>
                <Col className="col-12">
                    <SkillsList />
                </Col>
            </Row>

            <Row className="row-content">
                <Col>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p>
                                    I realized that collecting intelligence and understanding
                                    what an adversary's motivations are and where they're headed
                                    is fundamental to cybersecurity.
                                </p>
                                <footer className="blockquote-footer">
                                    Dmitri Alperovitch,{' '}
                                    <cite title="CrowdStrike Co-Founder">
                                        CrowdStrike Co-Founder
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;