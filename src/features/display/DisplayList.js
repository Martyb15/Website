import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedProject } from '../projects/projectsSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedSkill } from '../skills/skillsSlice';

const DisplayList = () => {
    const items = [selectFeaturedProject(),selectFeaturedPromotion(),selectFeaturedSkill()]
    return(
        <Row>
            {items.map((item,idx) => {
                return(
                    item && (
                        <Col md className="m-1" key={idx}>
                            {/* <DisplayCard item={item} /> */}
                            <AnimatedDisplayCard item={item}/>
                        </Col>
                    )
                )
            })}
        </Row>
    );
};

export default DisplayList;