import React, { useEffect, useState } from 'react'
import PokemonsByTypeInterface from '../../../Interfaces/PokemonsByTypeInterface';
import ShowMoreBtn from '../../../UI/ShowMoreBtn';
import PokemonShortDscr from './PokemonShortDscr/PokemonShortDscr';

interface SomeType{
    typeName:string[]|undefined,
    pTypeId:number|undefined,
}

export default function PokemonsByType(props:SomeType) {
    let pokemonsTypes = props.typeName?.map(type=>type);
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

    console.log(pokemonsTypes);

    return (
        <>
            {pokemonsTypes!.length>0 ? pokemonsTypes?.map((pokemonType)=> {
                return <> 
                <ShowMoreBtn>SHOW MORE {pokemonType.toLocaleUpperCase()} POCEMONS TYPES</ShowMoreBtn>
                {pokemons ? pokemons?.map(pokemon => <PokemonShortDscr></PokemonShortDscr>) : console.log('LOADING ...')}
                </>
            }
            ) : console.log('LOADING ...')}
            
        </>
    )
}
