import { useState } from 'react';
import { useParams } from 'react-router-dom'
import PokemonsByType from '../Home/PTypes/PokemonsByType/PokemonsByType';
import ShowMoreBtn from '../UI/ShowMoreBtn';
import './FullType.scss'

export default function FullType() {
  const { id, typeName } = useParams();
  let [count, setCount] = useState(9);

  function showMorePokemons() {
    setCount(count => count + 9)
  }

  return (
    <>
      <h2 className='type-title'> {typeName?.toLocaleUpperCase()} POKEMONS </h2>
      <div className='full-type-area'>
        <PokemonsByType key={id} id={id} count={count} />
      </div>
      <div className="btn-area">
        <ShowMoreBtn onClick={showMorePokemons}>SHOW MORE {typeName?.toLocaleUpperCase()} POKEMONS</ShowMoreBtn>
      </div>
    </>
  )
}
