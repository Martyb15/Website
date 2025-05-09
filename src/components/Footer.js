import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';



const Footer = () => {
    return(
        <footer className="site-footer">
            <Container>
                <Row> 
                    <Col xs={{size: 8, offset: 1}} sm='4'> 
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Directory</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* <Col  xs='6' sm='3' className="text-center"><h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a> </Col> */}

                        
                    <Col sm='6' className='text-center'>                         <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+17144204288'
                        >
                            <i className='fa fa-phone' /> +1(714)-420-4288
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:Barrios.Martin.Jr@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> Barrios.Martin.Jr@gmail.com
                        </a></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer; 