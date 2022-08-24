import React, { useEffect, useState } from 'react'
import PokemonsByTypeInterface from '../../../Interfaces/PokemonsByTypeInterface';
import PokemonShortDscr from './PokemonShortDscr/PokemonShortDscr';

interface SomeType {
    id: string | undefined,
    typeName: string | undefined,
    count: number | undefined
}

export default function PokemonsByType(props: SomeType) {
    let [pokemons, setPokemons] = useState<PokemonsByTypeInterface[]>();
    const pTypeId: string | undefined = props.id;
    let pokemonsId: number[] | undefined;
    let count = props.count;

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type/" + pTypeId)
            .then((response) => response.json())
            .then((response) => setPokemons(response.pokemon.slice(0, count)))

    }, [count]);

    pokemonsId = pokemons?.map((pokemon) => {
        let arr = pokemon.pokemon.url.split('/');
        return pokemon.pokemon.id = +arr[arr.length - 2];
    });


    return (
        <>
            {pokemons ? pokemons?.map(pokemon => {
                return <React.Fragment key={pokemon.pokemon.id}>
                    <PokemonShortDscr pokemonId={pokemon.pokemon.id}></PokemonShortDscr>
                </React.Fragment>;
            }) : console.log('LOADING ...')}
        </>
    )
}
