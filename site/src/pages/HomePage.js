import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import TypeWriter from '../components/TypeWriter';



const HomePage = () => {
    return(
        <Container>
            <SubHeader current="Home" /> 
            <TypeWriter />
            <DisplayList />
        </Container>
    )
}

export default HomePage; 