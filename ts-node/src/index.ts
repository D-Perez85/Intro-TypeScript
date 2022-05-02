//----------------------------------------------------OPCION 1 -----------------------------------------------------------------------------------------


// import { Hero as SuperHero, Hero2 } from "./classes/Hero";

// const Hero = 123; //CAMBIO NOMBRE DE LA INSTANCIA HERO PARA NO REDUNDAR EN DATOS
// const superman = new SuperHero('Juan', 2, 32); 
// const batman = new Hero2('Pedro', 12, 34); 

// console.log(superman, batman);


//----------------------------------------------------OPCION 2 -----------------------------------------------------------------------------------------
// import * as HeroClases from "./classes/Hero";
// import powers from "./data/powers";

// const superman = new HeroClases.Hero('Juan', 2, 43); 
// const batman = new HeroClases.Hero2('Juan', 5, 36); 

// console.log(superman, batman);
// console.log(powers);



//----------------------------------------------------OPCION 3 -----------------------------------------------------------------------------------------
// import {Hero} from "./classes/Hero";

// const superman = new Hero('Juan', 1, 43); 
// const batman = new Hero('Juan', 2, 43); 


// console.log(superman.power);
// console.log(batman.power);




//----------------------------------------------------OPCION 4 -----------------------------------------------------------------------------------------

// GENERICS
import { genericFn, printObject, genericArrowFn } from './generics/generic';

// printObject(213); 
// printObject('abc');
// printObject(['a', 'b', 'c']);
// printObject({a: 1, b: 2, c: 3}); 


console.log(genericFn(23.1234).toFixed(2)); 
console.log(genericFn(new Date()).getDate()); 
console.log(genericArrowFn('Hola Mundo').toUpperCase());






