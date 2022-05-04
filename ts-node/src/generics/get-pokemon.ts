import axios from "axios";
import { Pokemon } from '../interfaces/pokemon';

export const getpokemon = async(id: number) : Promise <Pokemon>=> {

    
    const res = await axios.get <Pokemon> (`https://pokeapi.co/api/v2/pokemon/${id}`)

    // console.log(res.data.abilities[0].ability.name);
    
    return res.data; 
    
}

