import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 8, offset: 1 }} sm='4'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </Col>

                    <Col sm='4' className='text-center'>
                        <h5>Connect</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://github.com/Martyb15" target="_blank" rel="noreferrer"
                               className="btn btn-link" style={{ fontSize: '1.4rem' }}>
                                <i className='fa fa-github' />
                            </a>
                            {/* TODO: Replace with your actual LinkedIn URL */}
                            <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer"
                               className="btn btn-link" style={{ fontSize: '1.4rem' }}>
                                <i className='fa fa-linkedin' />
                            </a>
                            <a href="mailto:Barrios.Martin.Jr@gmail.com"
                               className="btn btn-link" style={{ fontSize: '1.4rem' }}>
                                <i className='fa fa-envelope-o' />
                            </a>
                        </div>
                    </Col>

                    <Col sm='4' className='text-center'>
                        <a role='button' className='btn btn-link'
                           href='mailto:Barrios.Martin.Jr@gmail.com'>
                            <i className='fa fa-envelope-o' /> Barrios.Martin.Jr@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;