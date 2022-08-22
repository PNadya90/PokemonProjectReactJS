import React, { useEffect, useState } from 'react'
import PokemonsByTypeInterface from '../../../Interfaces/PokemonsByTypeInterface';
import PokemonShortDscr from './PokemonShortDscr/PokemonShortDscr';

interface SomeType{
    pTypeId:number|undefined,
}

export default function PokemonsByType(props:SomeType) {
    let [pokemons, setPokemons] = useState<PokemonsByTypeInterface[]>();
    const pTypeId: number|undefined = props.pTypeId;
    let pokemonsName: string[] | undefined;
    let pokemonsId: number[] | undefined;

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type/" + pTypeId)
            .then((response) => response.json())
            .then((response) => setPokemons(response.pokemon.slice(0, 6)))

    }, []);

    pokemonsName = pokemons?.map(pokemon => pokemon.pokemon.name);
    console.log(pokemonsName);
    pokemonsId = pokemons?.map((pokemon) => {
        let arr = pokemon.pokemon.url.split('/');
        return pokemon.pokemon.id = +arr[arr.length - 2];
    });

    return (
        <>
            {pokemons ? pokemons?.map(pokemon => <PokemonShortDscr></PokemonShortDscr>) : console.log('LOADING ...')}
        </>
    )
}
