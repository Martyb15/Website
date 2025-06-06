// import "./Skill.css";


const Skill = ({ skill }) => { // Destructure `skill` from the props object
    if (skill) {
        const { image, name, description } = skill;

        return (
            <>
                <div className="skill-card">
                    <div className="skill-image-wrapper">
                        <img src={image} alt={name} className="skill-image" />
                    </div>
                    <div className="skill-content">
                        <h5 className="fw-bold">{name}</h5>
                        <p className="skill-desc">{description}</p>
                    </div>
                </div>
            </>
        ); 
    }
    return null;
}

export default Skill;