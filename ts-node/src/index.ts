import { getpokemon } from './generics/get-pokemon';

getpokemon(4)
.then( value => console.log(value.sprites.front_default))
.catch(error => console.log(error))
.finally(()=> console.log('Fin del pokesistem'))
 


