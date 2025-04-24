import { Col } from "reactstrap";
import { selectAllSkills } from "./skillsSlice";
import Skill from "./Skill"

const SkillsList = () => {
    const skills = selectAllSkills();  

    if (!skills || skills.length === 0) {
        return (
            <Col className='mt-4'>
                <p>No skills available to display.</p>
            </Col>
        );
    }

    return (
        <Col className='mt-4'> 
            {
                skills.map((skill) => {
                    return (
                        <div className='d-flex mb-5' key={skill.id}>
                            <Skill skill={skill} />
                        </div>
                    )
                })
            }
        </Col>
    )
}

export default SkillsList;