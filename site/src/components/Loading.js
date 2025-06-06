import { Col, Spinner } from 'reactstrap';

const Loading = () => {

    return(
        <Col className="text-center my-5">
      <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
      <p className="mt-2">Loading...</p>
    </Col>
    )
};



export default Loading; 