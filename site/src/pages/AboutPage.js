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
                    <p>Highly motivated computer science graduate seeking an entry-level cybersecurity position. Eager to leverage                  
                        my solid foundation in cybersecurity principles, practical experience with penetration testing tools
                        (Metasploit, BurpSuite), and risk assessment methodologies to proactively secure digital assets and respond 
                        eﬀectively to security threats. Proven ability to work collaboratively in dynamic team environments, driven 
                        by continuous learning and a passion for protecting organizational integrity.
                    </p>
                </Col>

                <Col sm='6'> 
                    <Card>
                        <CardHeader className='bg-secondary text-white'>
                            <h3>Martin at a glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Born</dt>
                                <dd className='col-6'>December 15, 1996</dd>
                                <dt className='col-6'>Something</dt>
                                <dd className='col-6'>value</dd>
                                <dt className='col-6'>No. of Reviews in 2019</dt>
                                <dd className='col-6'>4388</dd>
                                <dt className='col-6'>bugs killed</dt>
                                <dd className='col-6'>42</dd>
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