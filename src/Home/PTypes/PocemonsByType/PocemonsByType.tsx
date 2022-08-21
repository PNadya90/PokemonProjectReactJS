import React, { useEffect, useState } from 'react'

export default function PocemonsByType(props:any) {
    const [pocemons, setPocemons]=useState();
    const pocemonsCount = 6;
    const pTypesId=[];

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type/")
            .then((response) => response.json())
            .then((response) => response = response.results)
            .then((response) => setPocemons(response.slice(0, pocemonsCount))
            )
            .catch(err => console.log(err));
    }, []);

  return (
    <div>
      
    </div>
  )
}
