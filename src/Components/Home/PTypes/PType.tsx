  import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PTypesInfo from "../../../Interfaces/PTypesInfo";
import ShowMoreBtn from "../../UI/ShowMoreBtn";
import PokemonsByType from "./PokemonsByType/PokemonsByType";
import './PType.scss';

function PType() {
    let typesName: string[] | undefined;
    let typeId: number;
    const [pTypes, setTypes] = useState<PTypesInfo[]>();
    let [typesCount, setTypesCount] = useState(2);
    let pokemonsCount=6;
    // let [err, setErr] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type/")
            .then((response) => response.json())
            .then((response) => response = response.results)
            .then((response) => setTypes(response.slice(0, typesCount))
            )
            .catch(err => console.log(err));
    }, [typesCount]);

    typesName = pTypes?.map(pType => pType.name);
    pTypes?.map(pType => {
        let arr = pType.url.split('/');
        pType.id = +arr[arr.length - 2];
        typeId = pType.id;
        return pType;
    })
    console.log(typesName);

    const showMoreTypes = () => {
        // console.log(typesCount);
        setTypesCount(count => count + 2);
    }
    
  
    return (
        <>
            {pTypes?.length! > 0 ? pTypes?.map(pType => {
                return <div key={pType.id} className='pType-area'>
                    <Link to= {`${pType.name}/${pType.id}`} className='link-to'>
                    <ShowMoreBtn>SHOW ALL {pType.name.toLocaleUpperCase()} POKEMONS</ShowMoreBtn>
                    </Link>
                    <PokemonsByType id={pType.id?.toString()} count={pokemonsCount}/>
                </div>
            }) : console.log('LOADING ...')}
            <ShowMoreBtn onClick={showMoreTypes}>SHOW MORE POKEMONS TYPES</ShowMoreBtn>
        </>
    )
}

export default PType

