import { Container, Row, Col } from 'reactstrap';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg="8" className="text-center">
                        <p className="hero-label">
                            Junior Backend Engineer &bull; Security Automation &bull; AppSec-Adjacent
                        </p>
                        <h1 className="hero-name">Martin Barrios</h1>
                        <p className="hero-oneliner">
                            I build backend APIs and automation using Python/Node, with emphasis on
                            correctness (tests), clear documentation, and reproducible demos.
                        </p>

                        <div className="hero-buttons">
                            <a href="/Martin_Barrios.pdf" className="hero-btn hero-btn-primary" target="_blank" rel="noreferrer">
                                <i className="fa fa-file-pdf-o" /> Resume
                            </a>
                            <a href="https://github.com/Martyb15" className="hero-btn hero-btn-outline" target="_blank" rel="noreferrer">
                                <i className="fa fa-github" /> GitHub
                            </a>
                            {/* TODO: Replace with your actual LinkedIn URL */}
                            <a href="https://www.linkedin.com/in/martin-barrios-8054531b2/" className="hero-btn hero-btn-outline" target="_blank" rel="noreferrer">
                                <i className="fa fa-linkedin" /> LinkedIn
                            </a>
                            <a href="mailto:Barrios.Martin.Jr@gmail.com" className="hero-btn hero-btn-outline">
                                <i className="fa fa-envelope-o" /> Contact
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;