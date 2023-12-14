import PokemonCard from "./Pokecard";
import "./Pokecard.css"
import "./Pokedex.css"

const Pokedex = ({ pokemon }) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex</h1>
            <div className="Pokedex-cardContainer">
                {pokemon.map((p) => (
                    <PokemonCard 
                        key={p.id} 
                        name={p.name} 
                        img={p.img} 
                        type={p.type} 
                        base_experience={p.base_experience} />
                ))}
            </div>
        </div>
    );
};

export default Pokedex;