const PokemonCard = ({ name, img, type, base_experience }) => {
    return (
        <div className="PokemonCard">
            <p className="PokemonCard-name">{name}</p>
            <img src={img} alt={name} className="PokemonCard-img" />
            <ul className="PokemonCard-stats">
                <li>Type: {type}</li>
                <li>EXP: {base_experience}</li>
            </ul>
        </div>
    );
};

export default PokemonCard;