import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


const ProjectCard = (props) => {
    return(
        <Card>
            <CardImg 
            width='100' 
            src={props.project.image}
            alt={props.project.name}
            />
            <CardImgOverlay>{props.project.name}</CardImgOverlay>
        </Card>

    );
};


export default ProjectCard; 