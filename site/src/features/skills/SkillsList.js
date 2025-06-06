import { Col, Row } from "reactstrap";
import { selectAllSkills } from "./skillsSlice";
import Skill from "./Skill"
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Error from '../../components/Error';



const SkillsList = () => {
    const skills = useSelector(selectAllSkills);  
    const isLoading = useSelector((state) => state.skills.isLoading); 
    const errMsg = useSelector((state) => state.skills.errMsg);

    

    // if (!skills || skills.length === 0) {
    //     return (
    //         <Col className='mt-4'>
    //             <p>No skills available to display.</p>
    //         </Col>
    //     );
    // }

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} /> 
    ) : (
        <Col className="mt-4">
            <Row className="g-4">
            {skills.map((skill) => (
                <Col
                key={skill.id}
                xs="12"   /* full width on phones */
                sm="6"    /* 2 columns on small (≥576px) */
                md="4"    /* 3 columns on medium (≥768px) */
                className="d-flex"
                >
                <Skill skill={skill} />
                </Col>
            ))}
            </Row>
      </Col>
  
    )
}

export default SkillsList;