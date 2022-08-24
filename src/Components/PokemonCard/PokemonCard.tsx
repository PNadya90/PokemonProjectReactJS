import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Pokemon } from '../../Interfaces/Pokemon';
import AddToCartBtn from '../UI/AddToCartBtn';
import './PokemonCard.scss'

export default function PokemonCard() {
    const { id } = useParams();
    let [pokemon, setPokemon] = useState<Pokemon>();
    let pokemonName = `${pokemon?.name[0].toLocaleUpperCase()}${pokemon?.name.slice(1)}`;


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then((response) => response.json())
            .then((response) => setPokemon(response))
    }, []);


    return (
        <div className="card-container">
            <div className="descr-head-area">
                <h1> Hi my name is {pokemonName} !</h1>
            </div>
            <div className="info-area">
            <div className="photo-container">
                <div className="main-img-container">
                    <img className="main-img" src={pokemon?.sprites.other.home.front_default} alt='/noImg.png'/>
                </div>
                <div className="addition-img">
                    <img className="small-img"src={pokemon?.sprites.front_shiny} />
                    <img className="small-img" src={pokemon?.sprites.back_shiny}/>
                    <img className="small-img" src={pokemon?.sprites.front_default}/>
                    <img className="small-img"src= {pokemon?.sprites.back_default}/>
                </div>

            </div>
            <div className="decr-info">
                <p>ID: {pokemon?.id} </p>
                <p>Base expirience: {pokemon?.base_experience} </p>
                <p>Abilities: {pokemon?.abilities.map((ability)=> ability.ability.name).join(', ')}</p>
                <p>Height: {pokemon?.height}</p>
                <p>Weight: {pokemon?.weight}</p>
                {pokemon?.stats?.map((stat) => {
                                return (
                                    <p key={stat.stat.name}>{`${stat.stat.name[0].toLocaleUpperCase()}${stat.stat.name.slice(1)}`}: {stat.base_stat}</p>)
                            })}
            </div>
            </div>
           <AddToCartBtn />
        </div >

    )
}
