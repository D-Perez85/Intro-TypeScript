(()=>{

type Hero = {
    name: string, 
    age?: number, 
    powers: string[], 
    getName?:()=> string
}

let myCustomVariable: (string | number | Hero) = 'Fernando'; 
console.log(typeof myCustomVariable);

myCustomVariable = 20; 
console.log(typeof myCustomVariable);

myCustomVariable = {
    name: 'Juan',
    age: 29, 
    powers: ['Ninguno']
} 
console.log(typeof myCustomVariable);

})()