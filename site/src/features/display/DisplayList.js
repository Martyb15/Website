import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedProject } from '../projects/projectsSlice';
import { selectFeaturedCertifications } from '../certifications/certificationsSlice';
import { selectFeaturedSkill } from '../skills/skillsSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';


const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedProject(state),
        selectFeaturedCertifications(state),
        selectFeaturedSkill(state)
    ]);
    return(
        <Row>
            {items.map((item,idx) => {
                const {featuredItem, isLoading, errMsg} = item; 
                if (isLoading) {
                    return <Loading key={idx}/>; 
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx}  />;
                }
                return(
                    featuredItem && (
                        <Col md className="m-1" key={idx}>
                            {/* <DisplayCard item={item} /> */}
                            <AnimatedDisplayCard item={featuredItem}/>
                        </Col>
                    )
                )
            })}
        </Row>
    );
};

export default DisplayList;