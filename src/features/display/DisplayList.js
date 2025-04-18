import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedProject } from '../projects/projectsSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = [selectFeaturedProject(),selectFeaturedPromotion()]
    return(
        <Row>
            {items.map((item,idx) => {
                return(
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                )
            })}
        </Row>
    );
};

export default DisplayList;