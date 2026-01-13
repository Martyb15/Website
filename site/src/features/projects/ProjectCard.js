import {Card, CardImg, CardImgOverlay, CardTitle, CardHeader} from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const {image, name, id} = project
    
    return(
        <Link to={`${id} style={{ textDecoration: 'none' }}`}>
            <Card>
            // <div style={{position:'relative'}}>
  {/* translucent sheet */}
  // <div style={{
  //   position:'absolute',
  //   inset:0,
  //   background:'rgba(255,255,255,0.7)',
  //   borderRadius:'inherit'
  // }} />

  {/* real header text on opaque layer */}
  <CardHeader
    className="px-3 py-2 rounded"
    style={{
      position:'relative',
      background:'#fff',   
    //   backgroundColor: 'rgba(255, 255, 255, 0.7)', // dark box behind text
    //   color: 'rgba(7, 223, 0, 0.7)',
    //   fontFamily: '"Fira Code", monospace',
      // fontWeight: 'bold',
    //   textShadow: '.75px .5px 1.5px rgba(0, 0, 0, 0.9)',
      fontSize: '600',
      color: #1e293b, 
        fontWeight: 600,
    //   border: '3px solid rgba(0, 0, 0, 0.9)',
    }}
  >
    {name}
  </CardHeader>
    // </div>

                <CardImg 
                width='100' 
                src={image}
                alt={name}
            />


                {/* <CardImgOverlay>
                <CardTitle className="card-title-overlay px-3 py-2 rounded"
                    style={{
                        backgroundColor: 'rgba(65, 41, 25, 0.7)', // dark box behind text
                        color: 'rgba(244, 149, 55, 0.7)',
                        // fontWeight: 'bold',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
                        fontSize: '1.50rem',
                        }} >{name}</CardTitle>
                </CardImgOverlay> */}
                

            </Card>
        </Link>

    );
};


export default ProjectCard;
