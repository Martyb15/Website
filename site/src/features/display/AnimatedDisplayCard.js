import { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);
    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1)' : 'scale(0.96)',
        config: { tension: 200, friction: 26 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div className="animated-display-card" style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;
