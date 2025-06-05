const Skill = ({ skill }) => { // Destructure `skill` from the props object
    if (skill) {
        const { image, name, description } = skill;

        return (
            <>
                <img src={image} alt={name} style={{ width: '150px' }} />
                <div className='m-4'>
                    <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        ); 
    }
    return null;
}

export default Skill;