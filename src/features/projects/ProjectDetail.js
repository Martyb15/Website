import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const ProjectDetail = ({ project }) => {
    const {image, name, description} = project;

    return (
        <Col md='5' className='m-1' > 
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};


export default ProjectDetail;