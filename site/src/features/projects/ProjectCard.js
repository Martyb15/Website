import { Card, CardImg, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { image, name, id } = project;
    
    return (
        <Link to={`${id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <CardHeader
                    className="px-3 py-2 rounded"
                    style={{
                        position: 'relative',
                        background: '#fff',
                        color: '#1e293b',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                    }}
                >
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
