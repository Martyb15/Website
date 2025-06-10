import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap"
import SkillsList from "../features/skills/SkillsList";
import SubHeader from "../components/SubHeader";

const AboutPage = () => {
    return(
        <Container>
            <SubHeader current="About Me"/>
            <Row className='row-content'>

                <Col sm='6'>
                    <h3>My Mission</h3>
                    <p>
        To leverage my passion for secure, data-driven innovation by building reliable software and robust security solutions that empower organizations and users alike. I’m committed to continuous learning—experimenting with new tools, frameworks, and techniques—to stay ahead of emerging threats and industry best practices. My goal is to collaborate across product, design, and engineering teams to deliver high-impact features, foster trust through transparent communication, and help create digital experiences that are both cutting-edge and secure.
                    </p>
                </Col>

                <Col sm='6'> 
                    <Card>
                        <CardHeader className='bg-secondary text-white'>
                            <h3>Martin at a glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Resides in:</dt>
                                <dd className='col-6'>Yorba Linda, California</dd>
                                <dt className='col-6'>Graduated</dt>
                                <dd className='col-6'>March 2025</dd>
                                <dt className='col-6'>Github</dt>
                                <dd className='col-6'>https://github.com/Martyb15</dd>
                                <dt className='col-6'>Interests</dt>
                                <dd className='col-6'>Web Development, Pen Testing, Cryptography, Blockchain</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>

                

               
            </Row>



            <Row className='row-content'>
                <Col className="col-12">
                    <h3 >Skills</h3>
                </Col>
                <Col className="col-12">
                    <SkillsList />
                </Col>
            </Row>



            <Row className='row-content' > 
            <Col> 
                    <Card className='bg-light mt-3'>
                        <CardBody >
                            <blockquote className='blockquote'>
                                <p>
                                I realized that collecting intelligence and understanding what an adversary's motivations are and where they're headed is fundamental to cybersecurity.
                                </p>
                                <footer className="blockquote-footer">
                                    Dmitri Alperovitch{' '}
                                        <cite title='Source Title'>
                                            {/* "Wind-Wafted Wild Flowers" - The Open Court,
                                            1903 */}
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage; 
