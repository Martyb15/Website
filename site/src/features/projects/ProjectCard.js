import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const {image, name, id} = project
    return(
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                width='100' 
                src={image}
                alt={name}
            />

                <CardImgOverlay>
                <CardTitle className="card-title-overlay px-3 py-2 rounded"
                    style={{
                        backgroundColor: 'rgba(65, 41, 25, 0.7)', // dark box behind text
                        color: 'rgba(244, 149, 55, 0.7)',
                        // fontWeight: 'bold',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
                        fontSize: '1.50rem',
                        }} >{name}</CardTitle>
                </CardImgOverlay>

            </Card>
        </Link>

    );
};


export default ProjectCard;