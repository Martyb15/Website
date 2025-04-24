import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
    return(
        <Container>
            <SubHeader current="Contact Us"/>
            <Row className="row-content align-items-center">
                <Col sm='4'>
                <h5>Located in</h5>
                <address>
                        Yorba Linda
                        <br />
                        Orange County, CA 92886
                        <br />
                        U.S.A.
                    </address>
                </Col>

                
                <Col> 
                    <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+17144204288'
                        >
                            <i className='fa fa-phone' /> 1-714-420-4288
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:Barrios.Martin.Jr@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> Barrios.Martin.Jr@gmail.com
                        </a>
                </Col>



            </Row>
               

         {/* ======== Second Row ======= */}
            <Row className="row-content">
                <Col xs='12'>
                    <h2>Send Me Your Feedback</h2>
                    <hr/>
                </Col>


                <Col md='10'>
                    TBD: ContactForm
                </Col>
            </Row>
        </Container>
       
    )
}

export default ContactPage; 