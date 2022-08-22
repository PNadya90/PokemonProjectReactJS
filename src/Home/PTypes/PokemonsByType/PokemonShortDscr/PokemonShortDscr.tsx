import React, { useEffect, useState } from 'react'
import { Pokemon } from '../../../../Interfaces/Pokemon';
import './PokemonShortDscr.scss'

interface SomePokemon {
    pokemonId: number
}

export default function PokemonShortDscr(props: SomePokemon) {
    let id = props.pokemonId;
    let [pokemon, setPokemon] = useState<Pokemon>();
    let pokemonName: string | undefined;

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then((response) => response.json())
            .then((response) => setPokemon(response))
    }, []);
    // console.log(pokemon?.name);
    pokemonName = `${pokemon?.name[0].toLocaleUpperCase()}${pokemon?.name.slice(1)}`;

    return (
        <div className="pokemon-short-dscr">
            <div className="pokemon-card">
                <div className="imgBox">
                    <h3 className="pokemonName">{pokemonName}</h3>
                    <img className="pokemon-img" alt="SORRY NO PHOTO" src={pokemon?.sprites.other.home.front_default} />
                </div>
                <div className="pokemon-desc">
                    <div>
                        {pokemon?.stats?.map((stat) => {
                            return (<div>{`${stat.stat.name[0].toLocaleUpperCase()}${stat.stat.name.slice(1)}`}: {stat.base_stat}</div>)
                        })}
                    </div>
                </div>
                <div className="add-button-area">
                    <button className="add-button" >

                    </button>
                </div>
            </div>
        </div>
    )
}
