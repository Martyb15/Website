import { Card, CardImg, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { image, name, id } = project;
    
    return (
        <Link to={`${id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <CardHeader className="project-card-header">
                    {name}
                </CardHeader>
                <CardImg 
                    width='100' 
                    src={image}
                    alt={name}
                />
            </Card>
        </Link>
    );
};

export default ProjectCard;
