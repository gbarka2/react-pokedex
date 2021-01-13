import React, {useEffect, useState} from 'react'
import Card from './card'

const List = () => {

  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`

  const [pokemonAll, setPokemonAll] = useState()
  const getPokemon = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPokemonAll(data.results)
  }
  
  useEffect(() => {
    getPokemon()
  }, [])
  
  const loaded = () => {
    return (
      <div>
        <ul>
          {pokemonAll.map((pokemon) => {
            return (
              <li className="poke-list-items" key={pokemon.name}>{pokemon.name}</li>
            )
          })}
        </ul>
        <Card />
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
    
    console.log('pokemonlist', pokemonAll)
  return (
    <div>
      {pokemonAll ? loaded() : loading()}
    </div>
  )
}

export default List