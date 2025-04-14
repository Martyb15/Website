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
                <CardTitle className="text-white px-3 py-2 rounded"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // dark box behind text
                        fontWeight: 'bold',
                        textShadow: '1px 1px 2px black',
                        fontSize: '1.25rem',
                        }} >{name}</CardTitle>
                </CardImgOverlay>

            </Card>
        </Link>

    );
};


export default ProjectCard; 