import { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? (isHovered ? 'scale(1.03)' : 'scale(1)') : 'scale(0.9)',
        boxShadow: toggle ? (isHovered ? '0 15px 25px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.2)') : '0 0 0 rgba(0,0,0,0)',
        config: { tension: 200, friction: 26 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div
            style={animatedStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
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
