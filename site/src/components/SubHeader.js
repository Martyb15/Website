import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({current, detail, titleHidden}) => {
    return(
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                        </BreadcrumbItem>
                        {detail && (
                            <BreadcrumbItem>
                                <Link to='/directory'>Directory</Link>
                            </BreadcrumbItem>
                        )} 
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                {!titleHidden && <h2 className="page-title">{current}</h2>}
                {!titleHidden && <hr />}
            </Col>
        </Row>
    )
}

export default SubHeader;