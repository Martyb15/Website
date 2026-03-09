import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Container>
            <Row className="justify-content-center text-center" style={{ padding: '6rem 1rem' }}>
                <Col md="6">
                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: 800,
                        color: 'var(--primary-color)',
                        marginBottom: '0.5rem',
                    }}>
                        404
                    </h1>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>
                        Page not found
                    </h2>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="hero-btn hero-btn-primary" style={{ textDecoration: 'none' }}>
                        <i className="fa fa-home" /> Back to Home
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFoundPage;