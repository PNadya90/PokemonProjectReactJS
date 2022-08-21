import { useEffect, useState } from "react";
import TypeInfo from "../../Interfaces/TypeInfo";
import ShowMoreBtn from "../../UI/ShowMoreBtn";
import PocemonsByType from "./PocemonsByType/PocemonsByType";


function PType() {
    let typesName: string[] | undefined;
    let typeId: number;
    const [pTypes, setTypes] = useState<TypeInfo[]>();
    let [typesCount, setTypesCount] = useState(2);
    // let [err, setErr] = useState();
  
    const showMoreTypes = () => {
        console.log(typesCount);
        setTypesCount(typesCount => typesCount + 2);
    }

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
        typeId= pType.id;
        return pType;
    })
    console.log(pTypes);
    return (
        <>
            {pTypes?.length! > 0 ? pTypes?.map(pType =><ShowMoreBtn key={pType.id}>SHOW ALL {pType.name.toUpperCase()} POCEMONS</ShowMoreBtn>) : console.log('LOADING ...')}
            
            <ShowMoreBtn onClick={showMoreTypes} >SHOW MORE POCEMONS TYPES</ShowMoreBtn>
        </>
    )
}

export default PType

